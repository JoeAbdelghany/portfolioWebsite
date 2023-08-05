import React, { Component } from 'react';
import Slider from "@/components/slider";
import Review from '@/components/review';
import styles from '@/styles/home/reviews/style.module.scss';

interface Props {
    reviews: any[],
    users: any[],
}

class Reviews extends Component<Props> {
    render() {
        const { reviews, users } = this.props;
        if (reviews.length > 0) {
            return(
                <>
                    <section className={`${styles.reviews}`}>
                        <div className="text-center pb-16 capitalize">
                            <h2 className="text-mc mb-4"> Reviews </h2>
                            <h5 className="text-smc"> The Latest Of Our Clients Reviews </h5>
                        </div>
                        <div className={`container`}>
                            <Slider slides={2}>
                                {reviews.map( review => {
                                    // const user = users.find(user => user._id == review.userId);
                                    const user = {
                                        image: 'HaneenMohamed.jpg',
                                        fName: 'Haneen',
                                        lName: 'Mohamed',
                                    };
                                    return ( <>  <Review review={review}  user={user} /> </> )
                                })}
                            </Slider>
                        </div>
                    </section>
                </>
            )
        }
    }
}

export default Reviews;
