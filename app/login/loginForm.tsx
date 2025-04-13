"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  mainText: "로그인" | "회원가입";
  onSwitch: () => void;
}

export default function LoginForm({ mainText, onSwitch }: LoginFormProps) {
  const path = useRouter();
  const isLogin = mainText === "로그인";
  const handleClick = () => {
    if (isLogin) {
      path.push("/home");
    } else {
      onSwitch();
    }
  };

  return (
    <div>
      <div className="font-bold text-2xl text-center">
        {isLogin ? "로그인" : "회원가입"}
      </div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="ID"
          className="border-2 border-gray-300 rounded-lg p-2 mt-5 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-lg p-2 mt-5 w-full"
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-2 border-gray-300 rounded-lg p-2 mt-5 w-full"
          />
        )}

        {isLogin && (
          <div className="mt-2">
            lost your password?
            <Link href="#" className="text-blue-500">
              Click here
            </Link>
          </div>
        )}
      </div>
      <button
        onClick={handleClick}
        className="mt-10 border-2 bg-blue-200 border-blue-200 rounded-sm font-bold p-2 px-10 shadow-2xl"
      >
        {isLogin ? "로그인" : "회원가입"}
      </button>
    </div>
  );
}
