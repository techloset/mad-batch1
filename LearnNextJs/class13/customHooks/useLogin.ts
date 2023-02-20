import { useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../store/authSlice";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((store)=> store.auth)

  useEffect(()=>{
    if (auth.isLoggedIn) {
      router.push("/");
    }
  },[auth])

  const onSubmitHandler = async () => {
    try {
      setLoader(true);

      // await signInWithEmailAndPassword(auth, email, password)

      dispatch(
        doLogin({
          email,
          password,
        })
      );
      toast.success("Successfully login!");
      router.push("/");
    } catch (e) {
      toast.error(e.message);
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    } finally {
      setLoader(false);
    }
  };

  return {
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setPassword,
    onSubmitHandler,
  };
}
