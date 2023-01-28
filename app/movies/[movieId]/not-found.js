import Link from "next/link";
import GoBackButton from "./GoBackButton";

const NotFound = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-5">
      <p className="mb-3">Unable to find that movie.</p>
      <GoBackButton />
    </div>
  );
};

export default NotFound;
