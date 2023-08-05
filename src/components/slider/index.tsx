import { Component, ReactNode } from 'react';
import Slide from 'react-slick';

interface Props {
    children: ReactNode,
    slides: number,
}

class Slider extends Component<Props> {
  render() {
    const { children, slides } = this.props;
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: slides
    };
    return (
        <Slide {...settings}>
            { children }
        </Slide>
    )
  }
}

export default Slider;