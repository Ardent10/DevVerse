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

  languages: any;
  company: string;
  jobTitle: string;
  startJobDate: string;
  endJobDate: string;
  degree: string;
  startDegreeDate: string;
  endDegreeDate: string;

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
        avatarId = uploadAvatar.$id;
      }

      if (data.bgImg) {
        const uploadBgImg = await storage.createFile(
          process.env.NEXT_PUBLIC_USERIMG_BUCKET_ID ?? "",
          ID.unique(),
          data.bgImg
        );
        bgImgId = uploadBgImg.$id;
      }

      const userRes = await database.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_USERS_COLLECTION_ID ?? "",
        data.userId,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          location: data.location,
          bio: data.bio,
          about: data.about,
          email: data.email,
          github: data.github,
          portfolio: data.portfolio,
        }
      );
      const userProfileRes = await database.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_USERSPROFILE_COLLECTION_ID ?? "",
        data.userId,
        {
          userId: data.userId,
          skills: data.skills,
          languages: data.languages,
          company: data.company,
          jobTitle: data.jobTitle,
          startJobDate: data.startJobDate,
          endJobDate: data.endJobDate,
          degree: data.degree,
          startDegreeDate: data.startDegreeDate,
          endDegreeDate: data.endDegreeDate,

          avatarId: avatarId,
          bgImgId: bgImgId,
        }
      );

      if (userRes.$id || userProfileRes.$id) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: "User Profile Updated Successfully",
          },
        });
        // await getUserProfile();
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
      const userRes = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_USERS_COLLECTION_ID ?? "",
        [Query.equal("userId", state?.userProfile?.$id)]
      );

      const userProfile = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
        process.env.NEXT_PUBLIC_USERSPROFILE_COLLECTION_ID ?? "",
        [Query.equal("userId", state?.userProfile?.$id)]
      );

      if (userRes.documents || userProfile.documents) {
        const user = userProfile.documents[0]; // Fetching the first user profile

        // Fetch avatar from storage for the user
        const avatarImg = storage.getFilePreview(
          process.env.NEXT_PUBLIC_USERIMG_BUCKET_ID ?? "",
          user.avatarId
        );

        const bgImg = storage.getFilePreview(
          process.env.NEXT_PUBLIC_USERIMG_BUCKET_ID ?? "",
          user.bgImgId
        );

        const userPersonalDetails = {
          id: user.$id,
          skills: user.skills,
          education: user.education,
          experience: user.experience,
          languages: user.languages,
          company: user.company,
          jobTitle: user.jobTitle,
          startJobDate: user.startJobDate,
          endJobDate: user.endJobDate,
          degree: user.degree,
          startDegreeDate: user.startDegreeDate,
          endDegreeDate: user.endDegreeDate,
          avatarImg: avatarImg,
          bgImgId: bgImg,
        };

        dispatch({
          type: "setUserProfile",
          payload: {
            ...state.userProfile,
            ...userPersonalDetails,
          },
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return { updateUserProfile, getUserProfile, loading };
}
