import { database, storage } from "@/config/appwrite";
import { useAppState } from "@/store";
import { ID, Query } from "appwrite";
import { useRouter } from "next/router";
import { useState } from "react";

interface editUserProfileProps {
  userId: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  about?: string;
  skills?: string[];
  email?: string;
  location?: string;
  github?: string;
  portfolio?: string;

  avatar?: any;
  bgImg?: any;
}

export function useUserProfile() {
  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const updateUserProfile = async (data: editUserProfileProps) => {
    try {
      // Upload the image file to Appwrite storage

      let avatarId = "";
      let bgImgId = "";

      if (data.avatar) {
        const uploadAvatar = await storage.createFile(
          process.env.NEXT_PUBLIC_USERIMG_BUCKET_ID ?? "",
          ID.unique(),
          data.avatar
        );
        console.log(uploadAvatar);
        avatarId = uploadAvatar.$id;
      }

      if (data.bgImg) {
        const uploadBgImg = await storage.createFile(
          process.env.NEXT_PUBLIC_USERIMG_BUCKET_ID ?? "",
          ID.unique(),
          data.bgImg
        );
        console.log(uploadBgImg);
        bgImgId = uploadBgImg.$id;
      }

      const res = await database.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_USERSPROFILE_COLLECTION_ID ?? "",
        data.userId,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          bio: data.bio,
          about: data.about,
          location: data.location,
          email: data.email,
          github: data.github,
          portfolio: data.portfolio,
          skills: data.skills,
          avatarId: avatarId,
          bgImgId: bgImgId,
        }
      );
      if (res.$id) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: "User Profile Updated Successfully",
          },
        });
        await getUserProfile();
      }
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "User Profile Update Failed",
        },
      });
    }
  };

  const getUserProfile = async () => {
    try {
      const res = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_USERSPROFILE_COLLECTION_ID ?? "",
        [Query.equal("userId", state?.userProfile?.$id)]
      );
      if (res.documents) {
        const user = res.documents;

        // Fetch images from storage for each post
        const userPersonalDetails = await Promise.all(
          user.map(async (user: any) => {
            const useImageIds = user.postImageIds;
            const imageUrls = await Promise.all(
              useImageIds.map((imageId: string) =>
                storage.getFilePreview(
                  process.env.NEXT_PUBLIC_USERIMG_BUCKET_ID ?? "",
                  imageId
                )
              )
            );
            return {
              id: user.$id,
              skills: user.skills,
              education: user.education,
              experience: user.experience,
              languages: user.languages,
              imgUrl: imageUrls,
            };
          })
        );

        dispatch({
          type: "setUserProfile",
          payload: {
            ...state.userProfile,
            ...userPersonalDetails
          },
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return { updateUserProfile, getUserProfile, loading };
}
