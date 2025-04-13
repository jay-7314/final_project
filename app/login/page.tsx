"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [action, setAction] = useState(false);

  return (
    <div className="flex flex-row background h-screen w-screen itmes-center justify-center">
      <div className="flex border-2 m-10 w-full flex-1/2 bg-white border-gray-100 rounded-lg jusetify-center items-center shadow-lg">
        <div className="bg-blue-200 flex flex-col justify-center items-center w-full h-full font-bold text-xl">
          Welcome to My Page
          <p className="mt-2">로그인 페이지를 구현합니다.</p>
          <p className="text-base my-5">
            framer-motion을 이용하여 <br />
            로그인과 회원가입에 움직임을 줬습니다.
          </p>
          <button
            onClick={() => setAction(true)}
            className="border-2 bg-gray-100 border-gray-200 rounded-sm p-2 px-4"
          >
            회원가입
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1/2 justify-center items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!action ? (
            <motion.div
              key={"login"}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              <div className="font-bold text-2xl text-center">Login</div>
              <div>
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
                <div className="mt-2">
                  lost your password?
                  <Link href="#" className="text-blue-500">
                    Click here
                  </Link>
                </div>
              </div>
              <button
                className="mt-10 border-2 bg-blue-200 border-blue-200 rounded-sm font-bold p-2 px-10 shadow-2xl"
                type="submit"
              >
                <Link href="/home">Login</Link>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={"signup"}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              <div className="font-bold text-2xl text-center">Sign Up</div>
              <div>
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-2 border-gray-300 rounded-lg p-2 mt-5 w-full"
                />
              </div>
              <button
                className="flex mt-10 border-2 bg-blue-200 border-blue-200 rounded-sm font-bold p-2 px-10 shadow-2xl"
                type="submit"
                onClick={() => setAction(false)}
              >
                Sign Up
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
