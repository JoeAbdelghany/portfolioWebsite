import React, { useEffect, useState } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import axios, { AxiosResponse } from 'axios';

const Document = () => {

        const [lang, setLang] = useState<string>();
        const [title, setTitle] = useState<string>();

        useEffect(() => { getDefLang(); }, []);
        const getDefLang = async () => {

            const res: AxiosResponse = await axios.get(`${process.env.API_KEY}/api/data`);
            setLang(res.data.languages.default);
            setTitle(res.data.title);

        };

        return (
            <Html lang={`${ lang == 'arabic' ? 'ar' : 'en'}`} dir={`${ lang == 'arabic' ? 'rtl' : 'ltr'}`}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="google-signin-client_id" content="804061669567-vcop39e0hsrhmp05bfb6vksu1ogoithj.apps.googleusercontent.com" />
                    <meta name="theme-color" content="#fff" />
                    <title> { title } </title>
                    <link rel="icon" href="/assets/images/logo/favicon/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/assets/images/logo/logo.png"></link>
                    <script src="/assets/js/client.js" async defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <script src={`${process.env.API_KEY}/scripts/main.js`}></script> */}
                    <script src={`/assets/js/main.js`}></script>
                </body>
            </Html>
        )
}

export default Document;
