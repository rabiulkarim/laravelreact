import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
export default function pageView({page}){
    const canonicalLink = page && page.slug ? route('pageView', page.slug) : route('pageView', 'no-title');
    const color = {
        color: "#FF5A5F",
      };

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
            <section className="py-8 py-md-11">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7 text-center">
                            <h2>
                            We strive to work with the best. <br />
                            The best companies in the world.
                            </h2>
                            <p className="fs-lg text-body-secondary mb-7 mb-md-9">
                            Landkit is a best place to work with some of the greatest tech companies in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
