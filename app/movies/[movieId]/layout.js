import GoBackButton from "./GoBackButton";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <GoBackButton />
      </div>
      {children}
    </div>
  );
}
