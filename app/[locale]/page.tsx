import { useTranslations } from "next-intl";
import { redirect } from "../../i18n/routing";
import LanguageSelect from "../../components/LanguageSelect";
import RichText from "../../components/RichText";

export default function Home() {
  const t = useTranslations("Landing");

  return (
    <div className="p-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl sm:text-7xl">
          Max<strong className="font-normal text-gray-400">imilian</strong>{" "}
          Schneebeli
        </h1>
        <LanguageSelect />
      </div>

      <ul className="mt-2 sm:text-2xl">
        <li>
          - <RichText>{(tags) => t.rich("position", tags)}</RichText>{" "}
          <a href="https://www.equans.ch/home" className="inline-block group">
            @ Equans Swizerland
            <span className="max-w-0 group-hover:max-w-full bg-opacity-0 group-hover:bg-opacity-100 transition-all delay-400 h-0.5 block translate-y-[-0.3rem] bg-black" />
          </a>
        </li>
        <li>- {t("programmer")}</li>
      </ul>
    </div>
  );
}
