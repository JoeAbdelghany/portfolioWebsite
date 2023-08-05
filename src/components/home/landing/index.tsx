import { Component, useState } from 'react';
import { IoSendOutline } from 'react-icons/io5';
import Link from 'next/link';
import styles from '@/styles/home/landing/style.module.scss';

import SocialMedia from '@/components/layout/socialMedia';

import language from '@/utils/language';


interface Props {
    user: any
}

const Landing = (props: Props) => {
        const { user } = props;
        const  [lang, setLang ] = useState<any>({});
        const { hi, iam } = lang;

        language(setLang);

        return(
            <section className={`${styles.landing} landing`} id="landing">
                <div className={`${styles.container} container h-full grid items-center grid-cols-2 relative`}>
                    <div className={`${styles.landingContent} justify-self-end w-fit`}>
                        <h1 className="title">{hi} {iam} <span className="text-mc">{ user.name.title } </span>!</h1>
                        <div className={`${styles.jobTitles} overflow-hidden flex gap-x-4`}>
                            <span>{iam} a</span> 
                            <ul className={`${styles.jobTitlesList} pr-2 h-20`}> 
                                {
                                    user.job.jobTitles.map((jobTitle:any) => (
                                        <li className={`${styles.jobTitle} overflow-hidden text-smc relative h-full flex justify-content-start whitespace-nowrap`}> { jobTitle } </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className={`${styles.desc}`}>
                            { user.describtion }
                        </p>
                        <button type="button" className={`btn fill gap-3`}>Hire me <IoSendOutline className="w-4 h-4"/></button>
                    </div>
                    <div className={`${styles.landingImage} justify-self-center`}></div>
                    <div className={`absolute right-0 bottom-0`}>
                        <SocialMedia accounts={ user.social.accounts.businessAccounts }/>
                    </div>
                </div>
            </section>
        )
}

export default Landing;