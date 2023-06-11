import { database, storage } from "@/config/appwrite";
import { useAppState } from "@/store";
import { ID, Query } from "appwrite";
import { useRouter } from "next/router";
import { useState } from "react";

interface addPostProps {
  userId?: string;
  title: string;
  description: string;
  tags: string[];
  image?: any;
  postImgId?: string;
}

export function usePost() {
  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const addPost = async (data: addPostProps) => {
    try {
      setLoading(true);
      // Upload the image file to Appwrite storage
      const uploadImgResponse = await storage.createFile(
        process.env.NEXT_PUBLIC_POSTIMG_BUCKET_ID ?? "",
        ID.unique(),
        data.image,
        ["*"]
      );

      // Get the file URL from the storage response
      const imageURL = uploadImgResponse.$id;

      const res = await database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_POST_COLLECTION_ID ?? "",
        ID.unique(),
        { ...data, postImageId: imageURL }
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
        process.env.NEXT_PUBLIC_POST_COLLECTION_ID ?? "",
        [Query.equal("userId", state?.userProfile?.id)]
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

  // const getPosts = async () => {
  //   try {
  //     const res = await database.listDocuments(
  //       process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
  //       process.env.NEXT_PUBLIC_POST_COLLECTION_ID ?? "",
  //       [Query.equal("userId", state?.userProfile?.id)]
  //     );

  //     if (res.documents) {
  //       const posts = res.documents;

  //       // Iterate over the posts
  //       for (const post of posts) {
  //         // Access the post image ID
  //         const postImageId = post.postImgId;

  //         // Fetch the file details for the post image
  //         const fileDetails = await storage.getFile(postImageId);

  //         // Access the file URL from the file details
  //         const imageUrl = fileDetails.$download;

  //         // Add the imageURL property to the post object
  //         post.imageURL = imageUrl;
  //       }

  //       dispatch({
  //         type: "setPosts",
  //         payload: posts,
  //       });
  //     }
  //   } catch (error) {
  //     dispatch({
  //       type: "setToggleSnackbar",
  //       payload: {
  //         open: true,
  //         severity: "error",
  //         message: "Post Fetching Failed",
  //       },
  //     });
  //   }
  // };

  return { addPost, getPosts, loading };
}
