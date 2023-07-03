'server-only';

import { createIntl } from '@formatjs/intl';
import { headers } from 'next/headers';

const getMessages = async (lang, namespace) => {
    const res = await fetch(
        `https://api.i18nexus.com/project_resources/translations/${lang}/${namespace}.json?api_key=${process.env.I18NEXUS_API_KEY}`,
        { next: { revalidate: process.env.NODE_ENV === 'production' ? false : 0 } }
    );

    return res.json();
};

export default async function useIntl(namespace) {
    // get current lang from header set by next-i18n-router
    const lang = headers().get('x-next-i18n-router-locale');

    return createIntl({
        locale: lang,
        messages: await getMessages(lang, namespace)
    });
}
