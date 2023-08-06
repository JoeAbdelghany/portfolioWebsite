import { Component } from "react";
import axios from 'axios';
import { Landing, About, Services, Projects, Reviews } from '@/components/home';

const API_KEY = process.env.API_KEY;

interface Props {
    data: {
        user: Object
    },
    reviews: Object[],
    projects: any[],
    users: any[],
};
 
class Home extends Component<Props> {
    render() {
        const { data, projects, reviews, users } = this.props;
        const { user } = data;

        return (
            <>
                <Landing user={user} />
                <About user={user} />
                <Services />
                <Projects projects={projects} />
                <Reviews reviews={reviews} users={users}/>
            </>
        );
    }
}

export const getStaticProps = async () => {
    const data = await (await axios.get(`${API_KEY}/api/data`)).data,

        projects = await (await axios.get(`${API_KEY}/api/projects`)).data,

        users = await (await axios.get(`${API_KEY}/api/users`)).data,

        reviews = await (await axios.get(`${API_KEY}/api/reviews`)).data;

    return {
        props: {
            data,
            reviews,
            projects,
            users,
        }
    };
}

export default Home;