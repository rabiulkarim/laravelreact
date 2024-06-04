import { Link, Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import slide from '../../../public/assets/img/illustrations/illustration-2.png';
export default function Welcome() {

    return (
        <>
        <MainLayout>
            <Head>
                <title>Welcome - My Business</title>
                <meta name="title" property="og:title" content="Welcome - My Business" />
                <meta name="description" property="og:description" content="Thi si meta description Text" />
                <meta name="keyword" property="og:keyword" content="This is mete keyword text" />
                <meta name="image" property="og:image" content="this is logo" />
                <meta name="url" property="og:url" content="/about-us" />
                <link rel="canonical" href="/about-us"></link>
            </Head>
            <section className="pt-4 pt-md-11">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-6 order-md-2">
                    <img src={slide} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />
                </div>
                <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
                    <h1 className="display-3 text-center text-md-start">
                        Welcome to  <span className="text-primary">Landkit</span>. <br/>
                        Develop anything.
                    </h1>
                    <p className="lead text-center text-md-start text-body-secondary mb-6 mb-lg-8">
                        Build a beautiful, modern website with flexible Bootstrap components built from scratch.
                    </p>
                    <div className="text-center text-md-start">
                        <Link className="btn btn-primary-subtle lift" href={route('pageView','contact-us')}>
                            Contact Us
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section>
                
            </section>
        </MainLayout>
        </>
    );
}
