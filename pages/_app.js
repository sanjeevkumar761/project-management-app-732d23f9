import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Project Management App | Modern SaaS Project Platform</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="A clean, professional, and intuitive SaaS project management platform with real-time collaboration, customizable dashboards, automated task tracking, seamless integrations, and advanced analytics." />
        <meta name="theme-color" content="#6C63FF" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
