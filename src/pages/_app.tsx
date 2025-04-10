import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png?v=1.0" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=1.0" />
                <link rel="shortcut icon" href="/favicon.ico?v=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1.0" />
                <meta name="apple-mobile-web-app-title" content="MAIN" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}
