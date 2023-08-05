import React, { Component } from 'react';
import Project from '@/components/project';

interface Props {
    projects: any[],
}

class Main extends Component<Props> {
  render() {
    const { projects } = this.props;
    return (
      <>
        <section className="projects col-span-9 p-0" id="projects">
            <div className="container grid grid-cols-4 gap-4">
                {projects.map( project => {
                    return <Project project={project} />;
                })}
            </div>
        </section>
      </>
    )
  }
}

export default Main;