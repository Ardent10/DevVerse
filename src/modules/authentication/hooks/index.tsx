import { account } from "@/config/appwrite";
import { ID } from "appwrite";

import { useAppState } from "@/store/index";
import { useRouter } from "next/router";

interface signupProps {
  email: string;
  password: string;
  username: string;
}
interface loginProps {
  email: string;
  password: string;
}

export function useAuth() {
  const [state, dispatch] = useAppState();
  const router = useRouter();

  const Signup = async ({ email, password, username }: signupProps) => {
    try {
      const res = await account.create(ID.unique(), email, password, username);
      if (res.status) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: "Account Created Successfully",
          },
        });
        router.push("/");
      }
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "Account Creation Failed",
        },
      });
    }
  };

  const Login = async ({ email, password }: loginProps) => {
    try {
      const res = await account.createEmailSession(email, password);
      if (res.ip) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: `Welcome ${res.clientName} to DevVerse`,
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
    }
  };

  const getAccount = async () => {
    try {
      const res = await account.get();
      if (res.name && res.email) {
        dispatch({
          type: "setToggleSnackbar",
          payload: {
            open: true,
            severity: "success",
            message: `Welcome ${res.name} to DevVerse`,
          },
        });
        dispatch({
          type: "setUserProfile",
          payload: {
            name: res.name,
            email: res.email,
            id: res.$id,
          },
        });
        router.push("/home");
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
