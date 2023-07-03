'use client';

import { IntlProvider } from 'react-intl';

export default async function ServerIntlProvider({ messages, locale, children }) {
    return (
        <IntlProvider messages={messages} locale={locale}>
            {children}
        </IntlProvider>
    );
}
