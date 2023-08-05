import { Component, ReactElement, ReactNode } from 'react';
import { BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

interface Props {
    rating: any,
}

class Rating extends Component<Props> {
    rating = ():ReactNode => {
        let { rating } = this.props;
        let stars: ReactNode[] = [<BsStar />,<BsStar />,<BsStar />,<BsStar />,<BsStar />];
        let i = 0 ;
        if (rating % 2 == 0) {
            rating = (rating - 2) / 2;
            while (i <= rating) {
                stars[i] = <BsStarFill />;
                i++
            }
        }else {
            rating = (rating - 3) / 2;
            while (i <= rating) {
                stars[i] = <BsStarFill />;
                i++
            }
            stars[rating + 1] = <BsStarHalf />;
        }
        return [...stars];
    };
    render() {
        return (
            <div className="rating flex gap-x-2 text-gold">
                {this.rating()}
            </div>
        );
    }
}

export default Rating;
