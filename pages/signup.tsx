import React, { FormEvent, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Header from "../components/Head/Header";
import SignUpForm from "../components/signup/SignUpForm";
import { AuthErrorCodes, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
// import { sign } from "crypto";
import Cookies from "js-cookie";

export default function SignUp() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [test, setTest] = useState<string>("");

  console.log(auth?.currentUser?.displayName);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      Cookies.set("firebaseToken", token);
      // Redirect or handle successful sign up
      //   router.push("/");
    } catch (error: any) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("Email address is already in use.");
      } else {
        setError("Error creating user account.");
      }
    }
  };

  return (
    <>
      <Header title={"Sign Up"} />
      <div className="w-screen h-[30vh] relative">
        <Image src={"/homepage-1.png"} layout="fill" alt="burger" objectFit="cover" priority />
        <div className="animate-loginFade px-4 bg-white h-[75vh] w-screen rounded-t-2xl pt-4 flex flex-col gap-y-5 fixed bottom-0">
          <div className="text-center">
            <p className="font-semibold text-xl text-darkGray">Sign Up</p>
            <p className="text-darkGray text-opacity-70">Enter your email and pasword</p>
          </div>
          <SignUpForm passwordInputRef={passwordInputRef} emailInputRef={emailInputRef} onSubmit={handleSignUp} error={error} />
          <input type="text" placeholder="test" onChange={(e: any) => setTest(e.target.value)} />
        </div>
      </div>
      <Navbar />
    </>
  );
}
