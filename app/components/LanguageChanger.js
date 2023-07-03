'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { locales } from "../../i18nConfig";

export default function LanguageChanger({ currentLang }) {
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = e => {
        const lang = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${lang};expires=${expires};path=/`;

        const currentPathLocale = locales.find(
            locale =>
                currentPathname === `/${locale}` ||
                currentPathname.startsWith(`/${locale}/`)
        );

        if (currentPathLocale) {
            // replace the locale in the current pathname
            router.push(currentPathname.replace(currentPathLocale, lang));
        } else {
            router.push(`/${lang}${currentPathname}`);
        }
    };

    return (
        <select onChange={handleChange} value={currentLang}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="ro">Romanian</option>
        </select>
    );
}
