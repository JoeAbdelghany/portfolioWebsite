import { Component } from 'react';
import Rating from '@/components/rating';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/project/style.module.scss';

interface Props {
    project: any 
}

class Project extends Component<Props> {
    render() {
        const { name, image, describtion, rating, status, year } = this.props.project;
        return (
                <div className={`${styles.project} rounded-lg border relative overflow-hidden hover:shadow`}>
                    <div className={`${styles.preview} overflow-hidden center`}>
                        <img src={image} alt={name} className={`${styles.img} w-full h-48`}/>
                    </div>
                    <div className="grid gap-y-2 p-4">
                        {/* <div> */}
                            <div className="flex justify-between">
                                <h1 className="text-base text-dc">{name}</h1>
                                <time className="text-mc font-semibold">{year}</time>
                            </div>
                            <p className="whitespace-nowrap w-full text-ellipsis pr-4 text-smc overflow-hidden">{ describtion }</p>
                        {/* </div> */}
                        <Rating rating={rating}/>
                        <span className={`${styles.status} btn fill absolute -top-10 left-2`}>{ status }</span>
                    </div>
                </div>
        )
    }
}

export default Project;