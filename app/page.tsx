export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl sm:text-7xl">
          Max<strong className="font-normal text-gray-400">imilian</strong>{" "}
          Schneebeli
        </h1>
        <select name="Lang" id="lang">
          <option value="en">ENG</option>
          <option value="de">DE</option>
        </select>
      </div>

      <ul className="mt-2 sm:text-2xl">
        <li>
          - <b>Electrical</b> Apprentice{" "}
          <a href="https://www.equans.ch/home" className="inline-block group">
            @ Equans Swizerland
            <span className="max-w-0 group-hover:max-w-full bg-opacity-0 group-hover:bg-opacity-100 transition-all delay-400 h-0.5 block translate-y-[-0.3rem] bg-black" />
          </a>
        </li>
        <li>
          - <b>Programming</b> Hobbyist
        </li>
      </ul>
    </div>
  );
}
