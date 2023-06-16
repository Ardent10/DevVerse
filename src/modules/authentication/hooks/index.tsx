import { account, database } from "@/config/appwrite";
import { ID, Query } from "appwrite";

import { useAppState } from "@/store/index";
import { useRouter } from "next/router";

interface signupProps {
  email: string;
  password: string;
  username: string;
  location: string;
  github: string;
  firstName: string;
  lastName: string;
}
interface loginProps {
  email: string;
  password: string;
}

export function useAuth() {
  const [state, dispatch] = useAppState();
  const router = useRouter();

  const Signup = async ({ email, password, username, location,github,firstName,lastName }: signupProps) => {
    try {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: true,
        },
      });
      const res = await account.create(ID.unique(), email, password, username);


      if (res.$id) {
        await database.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
          process.env.NEXT_PUBLIC_USERS_COLLECTION_ID ?? "",
          res.$id,
          {
            email: email,
            username: username,
            location: location,
            github: github,
            firstName: firstName,
            lastName: lastName,
          }
        );
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: "Account Created Successfully",
          },
        });
        router.push("/");
      } else {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "error",
            message: "Account Creation Failed",
          },
        });
      }
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "Account Creation Failed",
        },
      });
    } finally {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: false,
        },
      });
    }
  };

  const Login = async ({ email, password }: loginProps) => {
    try {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: true,
        },
      });

      const res = await account.createEmailSession(email, password);
      if (res.ip) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: `Welcome to DevVerse`,
          },
        });
        dispatch({
          type: "setIsLoading",
          payload: {
            isLoading: true,
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
          message: "Login Failed",
        },
      });
    } finally {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: false,
        },
      });
    }
  };

  const getAccount = async () => {
    try {
      const res = await account.get();
      if (res.name && res.email && res.$id) {

        // Get the logged user entire profile.
        const usersRes = await database.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DB_ID ?? "",
          process.env.NEXT_PUBLIC_USERS_COLLECTION_ID ?? "",
          [Query.equal("$id", res.$id)]
        );
        dispatch({
          type: "setUserProfile",
          payload: {
            ...usersRes.documents[0],
          },
        });
        // router.push("/home");
      } else {
        router.push("/");
      }
    } catch (error) {
      router.push("/");
    }
  };

  const Logout = async () => {
    try {
      await account.deleteSession("current");
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "success",
          message: "Logged Out Successfully.",
        },
      });
      router.push("/");
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "success",
          message: "Logout Failed",
        },
      });
    }
  };

  return {
    Signup,
    Login,
    Logout,
    getAccount,
  };
}
