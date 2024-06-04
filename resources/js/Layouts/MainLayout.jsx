import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from './MainLayoutHeader';
import Footer from './MainLayoutFooter';

export default function Main({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}
