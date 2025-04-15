import Image from "next/image";

export default function Home() {
  return (
    // 인스타그램 같은 부분
    <div className="flex gap-10 flex-row p-8 h-screen">
      <div className="flex flex-col w-1/2">
        <div className="font-bold text-center">회사타그램</div>
        <div className="border-2 h-full border-gray-300 rounded-lg p-4 mt-6">
          <div className="flex items-center flex-col mb-4">
            <div className="flex flex-row w-full">
              <Image
                src="/non-Picture.png"
                alt="non-Pic"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="ml-4 text-lg">하정우</div>
            </div>
            <div className="mt-2">
              오늘은 이력서를 엄청나게 제출했는데도 아무곳에서도 연락이 오질
              않네요 ㅠㅠ 젠장할.. 내가 뭘 그렇게 잘못한거죠? 말해봐요. 나한테
              왜 그랬어요
            </div>
          </div>
        </div>
      </div>

      {/* 오늘의일정 */}
      <div className="flex-1">
        <div className="text-xl font-bold mb-4 text-center">오늘의 일정</div>
        <div className="flex border-2 border-gray-300 rounded-lg p-4 mb-4">
          <ul className="divide-y-2 divide-gray-300 w-full list-disc ml-4">
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
          </ul>
        </div>
        {/* 팀일정 */}
        <div className="text-xl font-bold mb-4 text-center">오늘의 일정</div>

        <div className="flex border-2 border-gray-300 rounded-lg p-4 mb-4">
          <ul className="divide-y-2 divide-gray-300 w-full list-disc ml-4">
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
          </ul>
        </div>

        {/* 휴가일정 */}
        <div className="text-xl font-bold mb-4 text-center">오늘의 일정</div>
        <div className="flex border-2 border-gray-300 rounded-lg p-4 mb-4">
          <ul className="divide-y-2 divide-gray-300 w-full list-disc ml-4">
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
          </ul>
        </div>
        {/* 휴가일정 */}
        <div className="text-xl font-bold mb-4 text-center">오늘의 일정</div>
        <div className="flex border-2 border-gray-300 rounded-lg p-4 mb-4">
          <ul className="divide-y-2 divide-gray-300 w-full list-disc ml-4">
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
            <li>뭘 보셈?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
