import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const Icon = () => <img src="/assets/images/logo/favicon/favicon.png" width="32" height="32" className="bg-mc rounded" alt=''/>;
const Logo = () => {

    const [ title, setTitle ] = useState<String>('');
    useEffect(() => { getTitle(); }, []);
    const getTitle = async () => {
      const res = await axios.get('http://localhost:8000/api/data');
      const data = res.data;
      const title = data.title;
      setTitle(title);
    };
    return (
        <Link href="/" className="logo flex items-center gap-x-1">
            <Icon />
            <h1>{ title }</h1>
        </Link>
    )

}

export default Logo;
export { Icon };