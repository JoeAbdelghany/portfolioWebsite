import { Component, ReactNode } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Chat from './chat';
import ScrollBtn from './scrollBtn';
import { Data, Messages } from '@/lib/types';

interface Props {
    children: ReactNode,
    messages: Messages,
    data: Data,
}
class Layout extends Component<Props> {
    render() {
        const { data, children, messages } = this.props;
        const { user} = data;

        if (typeof window) Array.from(document.querySelectorAll('a')).map( ele => ele.href == location.href ? ele.classList.add('active'): ele.classList.remove('active'));

        return(
            <>
                <Header />
                <Main>
                    { children }
                </Main>
                <Chat currentMessages={messages} />
                <ScrollBtn />
                <Footer accounts={user.social.accounts.businessAccounts}/>
            </>
        );
    }
}

export default Layout;