import { Component } from 'react';
import Rating from '@/components/rating';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/review/style.module.scss';

interface Props {
    review: any,
    user: any
}

class Review extends Component<Props> {
    render() {
        const { user, review } = this.props;
        const { image, fName, lName } = user;
        let { content, rating, time } = review;
        const name = fName + ' ' + lName;
        const { createdAt } = time;
        const num = 200;
        if (content.split('').length >= num) {
            let contentArr = [];
            let i = 0;
            while (i <= num) {
                contentArr.push(content.split('')[i]);
                i++;
            }
            content = contentArr.join('') + '...';
        }
        return (
            <div className="review bg-lc rounded-xl py-4 px-5 shadow">
                <div className="header flex justify-between mb-4">
                    <div className="user flex items-center gap-4">
                        <div className="overflow-hidden w-12 h-12 rounded-full border-2 border-mc">
                            <Image src={`/assets/images/users/${image}`} alt={name} width="48" height="48" />
                        </div>
                        <div className="grid">
                            <span className="whitespace-nowrap text-ellipsis overflow-hidden text-mc">{ name }</span>
                            <span className="text-smc">{ createdAt }</span>
                        </div>
                    </div>
                    <Rating rating={rating} />
                </div>      
                <p className="desc">{ content }</p>
            </div>
        )
    }
}

export default Review;
