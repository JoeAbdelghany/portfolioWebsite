import { Component } from 'react';
import { Data } from '@/lib/types';
import Link from 'next/link';
// import styles from '@/styles/about/landing/style.module.scss';

interface Props {
    data: Data;
}

class Landing extends Component<Props> {
    render() {
        const { data } = this.props;
        const { user } = this.props.data;
        const { name, story, describtion } = user;
        const { title } = name;
        const { short } = story;
        return(
            <section className={`landing`} id="landing">
                <div className={`container h-full grid items-center grid-cols-2`}>
                    <div className={`content grid justify-start gap-y-4`}>
                        <h1>About <span className="text-mc">{ title }</span> !</h1>
                        {/* He is <span className="text-mc"> { new Date().getFullYear() - 2008 }  old</span>, and  */}
                        <h5>He is an <span className="text-mc"> Egyption Person </span>.</h5>
                        <p className="desc">{ describtion }</p>
                        <button type="button" className="btn fill">Show More</button>
                    </div>
                    <img src="/assets/images/about/landing.png" className={`w-96 justify-self-center imageRotate`} alt="about Joe Abdelghany" />
                </div>
            </section>
        )
    }
}

export default Landing;