import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-5xl sm:text-7xl">
        Max<strong className="font-normal text-gray-400">imilian</strong>{" "}
        Schneebeli
      </h1>

      <ul>
        <li>
          - Apprentice <b>Electrician</b>
        </li>
        <li>
          - <b>Programming</b> Hobbyist
        </li>
      </ul>
    </div>
  );
}
