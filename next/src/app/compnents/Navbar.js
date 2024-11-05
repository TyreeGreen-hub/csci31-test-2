import Button from "./Button";

export default function Navbar() {
    return (
      <nav className="flex justify-between bg-purple-60 p-6 items-center sticky top-0 shadow-lg">
        <div className="logo bg-purple-700 rounded-full p-6 hover:scale-105 transition-all cursor-pointer"></div>
        <div className="flex gap-x-4 items-center">
          <Button title="Button One" />
          <Button title="Button Two" />
        </div>
      </nav>
    );
  }