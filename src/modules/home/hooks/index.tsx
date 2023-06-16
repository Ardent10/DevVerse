import { database } from "@/config/appwrite";
import { useAppState } from "@/store";
import { ID } from "appwrite";
import { useRouter } from "next/router";
import { useState } from "react";

interface addTagsProps {
  userId?: string;
  label: string;
}

export function useTag() {
  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addTag = async (data: addTagsProps) => {
    try {
      const res = await database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_TAGS_COLLECTION_ID ?? "",
        ID.unique(),
        {
          userId: data.userId,
          label: data.label,
        }
      );

      if (res.$id) {

        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: "Tag Added Successfully",
          },
        });
        await getTags();
      }
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "Tag Creation Failed",
        },
      });
    }
  };

  const getTags = async () => {
    try {
      const res = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_TAGS_COLLECTION_ID ?? ""
      );
      if (res.documents) {
        const newChipArray = res.documents.map((tag) => {
          return {
            key: tag.$id,
            label: tag.label,
          };
        });

        dispatch({
          type: "setTags",
          payload: newChipArray,
        });
      }
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "Post Fetching Failed",
        },
      });
    }
  };

  return { addTag, getTags, loading };
}
