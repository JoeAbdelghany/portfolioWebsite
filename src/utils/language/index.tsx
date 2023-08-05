import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

type Lang = any;

const language = (setLang: (data: Lang) => void ) => {
    
    useEffect(() => { setLangState() }, []);
    const setLangState = async () => {
        
        const res: AxiosResponse = await axios.get(`${process.env.API_KEY}/api/data`);
        const lang = res.data.languages.default;

        setLang(require(`@/languages/${lang}.json`));

    };
    
};
export default language;