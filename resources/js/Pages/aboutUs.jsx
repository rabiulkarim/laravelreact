import MainLayout from '@/Layouts/MainLayout';
import photo16 from '../../../public/assets/img/photos/photo-16.jpg';
import photo17 from '../../../public/assets/img/photos/photo-17.jpg';
import photo18 from '../../../public/assets/img/photos/photo-18.jpg';
import photo19 from '../../../public/assets/img/photos/photo-19.jpg';
import photo20 from '../../../public/assets/img/photos/photo-20.jpg';
import photo21 from '../../../public/assets/img/photos/photo-21.jpg';
import { Head } from '@inertiajs/react';

export default function aboutUs({page}){
    const canonicalLink = page && page.slug ? route('pageView', page.slug) : route('pageView', 'no-title');
    return (
        <MainLayout>
            <Head>
                <title>{page.name}</title>
                <meta name="title" property="og:title" content={page.name}/>
                <meta name="description" property="og:description" content="Thi si meta description Text" />
                <meta name="keyword" property="og:keyword" content="This is mete keyword text" />
                <meta name="image" property="og:image" content="this is logo" />
                <meta name="url" property="og:url" content={canonicalLink} />
                <link rel="canonical" href={canonicalLink} />
            </Head>
            <section className="py-8 py-md-11 border-bottom">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 text-center">
                    <h1 className="display-2">
                    Small team. Big hearts.
                    </h1>
                    <p className="lead text-body-secondary mb-7 mb-md-9">
                    Our focus is always on finding the best people to work with. Our bar is high, but you look ready to take on the challenge.
                    </p>

                </div>
                </div>
                <div className="row">
                <div className="col-12">

                    <div className="row gx-4">
                    <div className="col-4">

                        <img className="img-fluid rounded shadow-lg" src={photo16} alt="..." />

                    </div>
                    <div className="col-3">

                        <img className="img-fluid rounded shadow-lg mb-4" src={photo17} alt="..." />

                        <img className="img-fluid rounded shadow-lg" src={photo18} alt="..." />

                    </div>
                    <div className="col-5">

                        <div className="row gx-5 mb-4">
                        <div className="col-5">

                            <img className="img-fluid rounded shadow-lg" src={photo19} alt="..." />

                        </div>
                        <div className="col-7">

                            <img className="img-fluid rounded shadow-lg" src={photo20} alt="..." />

                        </div>
                        </div>

                        <img className="img-fluid rounded shadow-lg" src={photo21} alt="..." />

                    </div>
                    </div>

                </div>
                </div>
            </div>
        </section>
        </MainLayout>
    );
}
