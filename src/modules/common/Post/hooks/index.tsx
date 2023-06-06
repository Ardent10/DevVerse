import { database } from "@/config/appwrite";
import { useAppState } from "@/store/index";
import { ID } from "appwrite";
import { useRouter } from "next/router";
import { useState } from "react";

interface addPostProps {
  userId?: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export function usePost() {
  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addPost = async (data: addPostProps) => {
    try {
      setLoading(true);
      const res = await database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_POST_COLLECTION_ID ?? "",
        ID.unique(),
        { ...data },
      );
      if (res.$id) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: "Post Added Successfully",
          },
        });
        router.push("/home");
      }
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "Post Creation Failed",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const getPosts = async () => {
    try {
      const res = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_POST_COLLECTION_ID ?? ""
      );
      if (res.documents) {
        dispatch({
          type: "setPosts",
          payload: res.documents,
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

  return { addPost, getPosts, loading };
}
