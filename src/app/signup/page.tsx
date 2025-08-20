"use client";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { set } from "mongoose";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabbled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {};

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-black">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-md mb-4 text-white"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter your username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-md mb-4 text-white"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-md mb-4 text-white"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter your password"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabbled ? "Signing up..." : "Signup"}
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
