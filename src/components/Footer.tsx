import Left from "./Slide/Left";
import Right from "./Slide/Right";

export default function Footer() {
  return (
    <footer className="border-t mt-20 fixed flex justify-between items-center bottom-0 w-full bg-white">
      <Left />
      <div className=" flex flex-row gap-2 max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Tejas Mandhare —
        <span>G</span>
        <span>L</span>
        <span>X</span>
        <span>i</span>
        <span>W</span>
        TODO: add logo
      </div>
      <Right />
    </footer>
  );
}
