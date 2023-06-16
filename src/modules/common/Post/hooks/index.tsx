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
  postImage?: any;
  fullName: string;
}

export function usePost() {
  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addPost = async (data: addPostProps) => {
    try {
      // Upload the image file to Appwrite storage
      const uploadPromises = data.postImage.map((file: any) => {
        return storage.createFile(
          process.env.NEXT_PUBLIC_POSTIMG_BUCKET_ID ?? "",
          ID.unique(),
          file
        );
      });

      const uploadImgResponses = await Promise.all(uploadPromises);

      const imageURLs = uploadImgResponses.map((response: any) => response.$id);

      if (imageURLs) {
        const res = await database.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
          process.env.NEXT_PUBLIC_POSTS_COLLECTION_ID ?? "",
          ID.unique(),
          {
            fullName: data.fullName,
            title: data.title,
            description: data.description,
            tags: data.tags,
            userId: data.userId,
            postImageIds: imageURLs,
          }
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
          await getPosts();
          router.push("/home");
        }
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
    }
  };

  const getPosts = async () => {
    try {
      const res = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_POSTS_COLLECTION_ID ?? "",
        // [Query.equal("userId", state?.userProfile?.$id)]
        [Query.orderDesc("$createdAt")]
      );
      if (res.documents) {
        const posts = res.documents;

        // Fetch images from storage for each post
        const postsWithImages = await Promise.all(
          posts.map(async (post: any) => {
            const postImageIds = post.postImageIds;
            const imageUrls = await Promise.all(
              postImageIds.map((imageId: string) =>
                storage.getFilePreview(
                  process.env.NEXT_PUBLIC_POSTIMG_BUCKET_ID ?? "",
                  imageId
                )
              )
            );
            return {
              id: post.$id,
              createdAt: post.$createdAt,
              fullName: post.fullName,
              title: post.title,
              description: post.description,
              tags: post.tags,
              userId: post.userId,
              postImageUrls: imageUrls,
            };
          })
        );

        dispatch({
          type: "setPosts",
          payload: postsWithImages,
        });
      }
    } catch (error) {
     console.log("error", error);
    }
  };


  return { addPost, getPosts, loading };
}
