import { Component } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Props {
    projects: any,
}

class Project extends Component<Props> { 
    render() {
        const { projects } = this.props;
        return(
            <>
                <section>
                    <div className="container grid grid-cols-12 gap-x-16">
                        
                    </div>
                </section>
            </>
        )
    }
}

export const getStaticProps = async () => {
    const res: AxiosResponse = await axios.get(`${process.env.API_KEY}/api/projects`);
    const projects: any = res.data;
    return {
        props: {
            projects,
        }
    }
};

export default Project;