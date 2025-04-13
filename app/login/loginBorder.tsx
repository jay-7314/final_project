interface LoginBorderProps {
  onSwhitch: () => void;
  text: string;
  btnText: string;
}

export default function LoginBorder({
  onSwhitch,
  text,
  btnText,
}: LoginBorderProps) {
  return (
    <div className="flex border-2 m-10 border-gray-100 rounded-lg shadow-lg">
      <div className="bg-blue-200 p-10 flex flex-col justify-center items-center font-bold text-xl">
        Welcome to My Page
        <p className="mt-2">{text}</p>
        <p className="text-base my-5">
          framer-motion을 이용하여 <br />
          로그인과 회원가입에 움직임을 줬습니다.
        </p>
        <button
          onClick={onSwhitch}
          className="border-2 bg-gray-100 border-gray-200 rounded-sm p-2 px-4"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
