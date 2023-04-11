import { Component } from 'react';
import Logo from '../logo/logo';
import Link from 'next/link';
import SocialMedia from '../socialMedia/socialMedia';

interface Props {
    accounts: Object,
    title: string,
}

class Footer extends Component<Props> {
     render() {
        const { title, accounts } = this.props;
        return (
            <footer className="w-full bg-lc pt-32">
                <div className="container">
                        <div className="content flex justify-between mb-20">
                            <div className="grid gap-y-4 w-80">
                                <Logo title={ title }/>
                                <p className="w-full desc">
                                    I love the intenet so much do you like it linke me you he she it any thing words letters &&  I realy need 6 words more then it  
                                </p>
                                <SocialMedia accounts={ accounts }/>
                            </div>
                            <div className="navItems flex gap-x-32">
                                <div className="navItem">
                                    <h2>get help</h2>
                                    <ul>
                                        <li><Link href="/help/faq">FAQs</Link></li>
                                        <li><Link href="/help">help & support</Link></li>
                                        <li><Link href="/fetures">fetures</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                    </ul>
                                </div>
                                <div className="navItem">
                                    <h2>about us</h2>
                                    <ul>
                                        <li><Link href="/help/faq">FAQs</Link></li>
                                        <li><Link href="/about">about us</Link></li>
                                        <li><Link href="/fetures">fetures</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                    </ul>
                                </div>
                                <div className="navItem">
                                    <h2>projects</h2>
                                    <ul>
                                        <li><Link href="/help/faq">home</Link></li>
                                        <li><Link href="/about">about</Link></li>
                                        <li><Link href="/fetures">projects</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="end py-4 flex justify-between items-center">
                            <div className="copyWrite tcl">
                                © youssef. All rights reserved 
                            </div>
                            <ul className="pages flex gap-x-4">
                                <li><Link href="/" className="mch capitalize">home</Link></li>
                                <li><Link href="/about" className="mch capitalize">about</Link></li>
                                <li><Link href="/projects" className="mch capitalize">projects</Link></li>
                                <li><Link href="/contact" className="mch capitalize">contact</Link></li>
                            </ul>
                        </div>
                </div>

            </footer>
        );
    }
}

export default Footer;