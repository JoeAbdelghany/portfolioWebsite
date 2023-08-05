import { Component } from 'react';
import { Data } from '@/lib/types';
import Link from 'next/link';
// import styles from '@/styles/about/landing/style.module.scss';

interface Props {
    name: string;
}

class Landing extends Component<Props> {
    render() {
        const { name } = this.props;
        return(
            <section className={`landing`} id="landing">
                <div className={`container h-full grid items-center grid-cols-2`}>
                    <div className={`content grid justify-start gap-y-4`}>
                        <h1>Contact <span className="text-mc">{ name }</span> !</h1>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere fugiat reprehenderit unde numquam nesciunt qui nobis.</p>
                        <button type="button" className="btn fill">Contact</button>
                    </div>
                    <img src="/assets/images/contact/contact.png" className={`w-96 justify-self-center imageRotate`} alt="about Joe Abdelghany" />
                </div>
            </section>
        )
    }
}

export default Landing;