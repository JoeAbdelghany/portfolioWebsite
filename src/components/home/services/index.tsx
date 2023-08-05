import { Component, ReactElement } from 'react';
import Link from 'next/link';
import { IoMdSquare, IoMdCube } from 'react-icons/io';

// import styes from '@/styles/home/services/index.scss';

interface Service {
    title: string,
    icon: ReactElement,
    content: string,
}

class Services extends Component {
    services: Service[] = [
        {
            title: 'web design',
            icon: <IoMdCube />,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
        {
            title: 'web design',
            icon: <IoMdCube />,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
        {
            title: 'web design',
            icon: <IoMdCube />,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
        {
            title: 'web design',
            icon: <IoMdCube />,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
    ]; 
    render () {
        return (
            <>
                <section className="services" id="services">
                        <h1><span>My</span> Services</h1>
                    <div className="container grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-start gap-y-8 pt-12">
                            <div className="bg-tf p-1">
                                <IoMdCube className="text-mc w-12 h-12"/>
                            </div>
                            <div className="flex flex-col items-start gap-y-4 pr-12">
                                <h3>Why <span className="text-mc">Choose me</span> ?</h3>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus modi dignissimos iusto quod ratione laborum consectetur eius id eveniet.</p>
                                <Link href="/services" className="btn fill">Learn More</Link>
                            </div>
                        </div>
                        <ul className="grid grid-cols-2 gap-8">
                            {this.services.map((service,index) => (
                                <li className={`card ${index % 2 === 0 ? 'translate-y-8': ''}`}>
                                        { service.icon }
                                    <h5>{ service.title }</h5>
                                    <p>{ service.content }</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default Services;