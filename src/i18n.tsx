import {I18nProvider} from "@lingui/react";
import App from "./App.tsx";
import {i18n} from "@lingui/core";
import {useEffect} from "react";

async function dynamicActivate(locale: string) {
    const { messages } = await import(`./locales/${locale}.po`);

    i18n.load(locale, messages);
    i18n.activate(locale);
}

export function I18nApp() {
    useEffect(() => {
        const locale = new URLSearchParams(window.location.search).get("locale") || "en";
        dynamicActivate(locale);
    }, [])
    return (
        <I18nProvider i18n={i18n}>
            <App />
        </I18nProvider>
    )
}