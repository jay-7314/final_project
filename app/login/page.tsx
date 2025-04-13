"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LoginBorder from "./loginBorder";
import LoginForm from "./loginForm";

export default function Login() {
  const [action, setAction] = useState(false);

  return (
    <div className="flex flex-col background h-screen w-screen itmes-center justify-center">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={action ? "signup" : "login"}
          initial={{ x: action ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: action ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center"
        >
          {!action ? (
            <>
              <LoginBorder
                onSwhitch={() => setAction(true)}
                text="로그인 페이지를 구현합니다."
                btnText="회원가입"
              />
              <LoginForm mainText="로그인" onSwitch={() => setAction(true)} />
            </>
          ) : (
            <>
              <LoginForm
                mainText="회원가입"
                onSwitch={() => setAction(false)}
              />
              <LoginBorder
                onSwhitch={() => setAction(false)}
                text="회원가입 페이지를 구현합니다."
                btnText="로그인"
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
