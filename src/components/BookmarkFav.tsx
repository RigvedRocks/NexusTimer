import Favorite from "@/icons/Favorite";
import { useState } from "react";

export default function BookmarkFav({
  isChecked,
  handleChange,
  cubeId,
}: {
  isChecked: boolean;
  handleChange: any;
  cubeId: string;
}) {
  const [checked, setChecked] = useState(isChecked);

  return (
    <button
      onClick={() => {
        handleChange(cubeId);
        setChecked(!checked);
      }}
      aria-pressed={checked}
      type="button"
      className={`w-4 h-4 mx-auto rounded-md border ${
        checked
          ? "bg-white text-black"
          : "border-zinc-800 text-transparent hover:bg-zinc-900"
      } text-sm flex justify-center items-center`}
    >
      <Favorite />
    </button>
  );
}