import useIntl from 'app/intl';
import ExampleClientComponent from './components/ExampleClientComponent';
import ServerIntlProvider from "./components/ServerIntlProvider";
import LanguageChanger from "@/app/components/LanguageChanger";

export default async function Home() {
    const intl = await useIntl('home');

    return (
        <main>
            <h1>{intl.formatMessage({ id: 'homepage_header' })}</h1>
            <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
                <ExampleClientComponent />
            </ServerIntlProvider>
            <LanguageChanger currentLang={intl.locale} />
        </main>
    );
}
