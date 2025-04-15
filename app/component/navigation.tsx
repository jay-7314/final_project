import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const categories = [
    "home",
    "community",
    "myplan",
    "teamplan",
    "approval",
    "mail",
    "settings",
  ];
  return (
    <div className="flex justify-start flex-col border-r-2 border-dashed border-gray-300 my-5 p-8 w-50">
      <div className="flex justify-center items-center">
        <Image
          src="/non-Picture.png"
          alt="이미지 없음"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="font-bold flex text-center mt-5">
        하정우
        <br />
        프론트엔드 개발자
      </div>
      {categories.map((categories, index) => (
        <Link
          href={`/${categories}`}
          key={index}
          className="flex font-bold text-xl items-center mt-10 gap-3 hover:text-yellow-300"
        >
          {categories}
        </Link>
      ))}
    </div>
  );
}
