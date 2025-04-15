"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((e) => e - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(timer);
      window.location.href = "/home";
    }
  });

  return (
    <div className="center h-screen w-screen font-bold text-center">
      <Image src="/404_icon.png" alt="404 페이지" width={300} height={300} />
      <div className="mt-10">
        잘못된 페이지입니다. <br /> {count}초 이후에 메인페이지로 넘어갑니다.
      </div>
    </div>
  );
}
