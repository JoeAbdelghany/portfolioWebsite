import { Component } from 'react';
import Slider from '@/components/slider';
import Project from '@/components/project';
import Link from 'next/link';

interface ProjectType {
    link: string
}

interface Props {
    projects: any[],
}

class Projects extends Component<Props> {
    projects: ProjectType[] = this.props.projects.filter((val,ind,arr) => {
            return ind < 10;
        });

    render () {
        if (this.projects.length != 0) {
            return (
                <>
                    <section className="projects" id="projects">
                            <h1 className="text-mc text-center"><span className="text-smc">My</span> Projects</h1>
                        <div className="container grid grid-cols-5 gap-8 mb-8">
                            {this.projects.map((project) => (
                                <Link href={project.link}><Project project={project} /></Link>
                            ))}
                        </div>
                        <div className="center">
                            <Link href="/projects" className="btn fill">Show All</Link>
                        </div>
                    </section>
                </>
            );
        }
    }
}

export default Projects;