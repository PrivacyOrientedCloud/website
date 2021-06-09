import {AppProps} from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/tailwind.css";

function App({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>PrivacyOrientedCloud</title>
                <meta name="description" content="PrivacyOrientedCloud" />
                <link rel="icon" href="/assets/img/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
