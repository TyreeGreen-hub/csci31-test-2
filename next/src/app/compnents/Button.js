export default function Button({ title }) {
    return (
      <button
    className="px-6 py-4 bg-purple-200 hover:bg-purple-300 active:bg-purple-400 shadow-md transition-all cursor-pointer border-0 rounded-md">{title}</button>
    );
  }