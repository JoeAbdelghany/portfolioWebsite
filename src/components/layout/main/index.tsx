import { Component, ReactNode } from 'react';
// import styles from '@/styles/layout/main/main.module.scss';

interface Props {
    children: ReactNode;
};

class Main extends Component<Props> { 
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}

export default Main;