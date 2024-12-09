"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "../i18n/routing";
import { useEffect, useRef } from "react";

export default function LanguageSelect() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <select
      name="Lang"
      id="lang"
      onChange={(e) => router.push("/", { locale: e.target.value })}
      value={pathName.slice(1)}
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
