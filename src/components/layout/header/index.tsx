import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsChatDots as ChatIcon } from 'react-icons/bs';
import { IoNotificationsOutline as NotificationsIcon } from 'react-icons/io5';
import Logo from '../logo';

import language from '@/utils/language';

interface Props {};

const Header = () => {
           
        const [ isScrolled, setScroll ] = useState<boolean>(false);
        const [lang, setLang ] = useState<any>({});
        const { home, about, projects, contact, blogs, logIn, signUp } = lang;

        language(setLang);

       if (typeof window) window.addEventListener('scroll', () => window.scrollY === 0 ? setScroll(false) : setScroll(true));

        return (
            <header className={`fixed top-0 left-0 ${isScrolled ? 'shadow': ''}`}>
                <div className="container flex justify-between items-center h-full">
                        <Logo />
                        <ul className="flex gap-x-4"> 
                        {/* className={`${location.href === '/' ? 'active': ''}`} */}
                            <li><Link href="/">{home}</Link></li>
                            <li><Link href="/about">{about}</Link></li>
                            <li><Link href="/projects">{projects}</Link></li>
                            <li><Link href="/contact">{contact}</Link></li>
                            <li><Link href="/blogs">{blogs}</Link></li>                            
                        </ul>
                        <div className="flex gap-x-4 items-center">
                            <Link href="/auth/login" className="btn fill">{ logIn}</Link>
                            <Link href="/auth/signup" className="btn empty">{ signUp }</Link>
                        </div>
                </div>
            </header>
        );
}

export default Header;