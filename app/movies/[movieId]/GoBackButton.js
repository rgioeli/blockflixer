"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const GoBackButton = ({}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex cursor-pointer space-x-2 font-medium text-left mb-5 border-2 px-2 py-1 rounded-md"
    >
      <p>Back to movies</p>
      <BsArrowLeft size={25} className="text-white" />
    </div>
  );
};

export default GoBackButton;
