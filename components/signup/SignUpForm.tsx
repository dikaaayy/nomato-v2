import React from "react";

export default function SignUpForm({ emailInputRef, passwordInputRef, onSubmit, error }: any) {
  // console.log(error);
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input id="email" required spellCheck={false} type="email" className="border-[1px] w-full rounded outline-none p-2" placeholder="Enter your email" ref={emailInputRef} />
        <p className={`text-red-600 text-sm font-medium ${error === "Email address is already in use." ? "visible" : "invisible"}`}>Email address is already in use</p>
      </div>
      <label htmlFor="pass" className="font-medium mb-2">
        Password
      </label>
      <input required id="pass" type="password" className="border-[1px] w-full rounded outline-none p-2" placeholder="Enter your password" ref={passwordInputRef} />
      <button type="submit" className="w-full py-4 mt-7 font-semibold text-white bg-customRed-600 rounded-full">
        Sign Up
      </button>
    </form>
  );
}
