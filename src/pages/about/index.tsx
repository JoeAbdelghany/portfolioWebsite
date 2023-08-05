import { Component } from 'react';
import { Data } from '@/lib/types/data';
import axios, { AxiosResponse } from 'axios';
import { Landing } from '@/components/about';

interface Props {
    data: Data,
}

class About extends Component<Props> { 
    render() {
        const { data } = this.props;
        return(
                <Landing data={data}/>
        )
    }
}

export const getStaticProps = async () => {
    const res: AxiosResponse = await axios.get('http://127.0.0.1:8000/api/data');
    const data: Data = res.data;
    return {
        props: {
            data,
        }
    }
};

export default About;