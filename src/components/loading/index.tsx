import { Component } from 'react';

class Loading extends Component {
    render () {
        const balls = [
            {Id: 0},
            {Id: 1},
            {Id: 2},
            {Id: 3},
            {Id: 4},
            {Id: 5},
            {Id: 6},
            {Id: 7},
        ];
        return (
            <section className="loading center">
                    <div className="container relative center">
                        <h2 className="absolute text-wc text-3xl font-medium">Loading...</h2>
                        <div className="loader center relative">
                            {balls.map((ball) => ( <span className={`absolute rounded-full bg-wc`} style={{ "--i": ball.Id } as React.CSSProperties}></span>))}
                        </div>
                    </div>
                    <svg>
                        <filter id="gooey" className="w-0 h-0">
                            <feGaussianBlur in="SourceGraphic" stdDeviation={10}/>
                            <feColorMatrix values="
                                1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 20 -10 "/>
                        </filter>
                    </svg>
            </section>
        )
    }
}

export default Loading;