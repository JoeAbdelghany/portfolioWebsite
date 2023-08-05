import { useEffect, useState } from "react";
import axios from 'axios';
import { Messages, Message } from '@/lib/types';
import Loading from '@/components/loading';
import Layout from '@/components/layout';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const API_KEY = process.env.API_KEY;

type Data = any;

const App = ({ Component, pageProps }: AppProps) => {
  const user = { 
    _id: '647625d8e5b38ce6619fd5bb',
  };
  const [data, setData] = useState(false);
  const [messages, setMessages] = useState<Messages>([]);
  console.log(messages)
  useEffect(() => {(async ():Promise<void> => {

    setData(await (await axios.get(`${API_KEY}/api/data`) as {data: Data}).data);

    setMessages(await (await axios.get(`${API_KEY}/api/messages`) as {data: Messages}).data.filter( (msg: Message) => {
      return msg.userId === user._id || !msg.userId;
    }));
  })()}, []);
  if (!(data)) { 
    return <Loading />;
  }else { 
    return (
      <>
        <NextNProgress 
          color="var(--mc)" 
          startPosition={0.3} 
          stopDelayMs={200} 
          height={2} 
          showOnShallow={false} 
          options={{ easing: 'ease', speed: 500 }} 
        />
        <Layout data={ data } messages={ messages }>
          <Component {...pageProps} />
        </Layout>
      </>
    )}
}

export default App;