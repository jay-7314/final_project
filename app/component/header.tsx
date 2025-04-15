import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row h-10 justify-between items-center border-b-2 border-dotted border-gray-300 p-6">
      <Image
        src="/non-Picture.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full p-2"
      />
      하정우님 오늘도 힘내세요!!
    </div>
  );
}
