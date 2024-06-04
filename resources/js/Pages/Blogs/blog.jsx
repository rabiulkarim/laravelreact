import MainLayout from '@/Layouts/MainLayout';
import { Head} from '@inertiajs/react';
import BlogGrid from "../../Components/blogGrid";
export default function blog({ posts, page }){
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

            <section className="pt-7 pt-md-10 mb-5">
                <div className="container">
                    <div className="row align-items-center mb-5">
                    <div className="col-12 col-md">

                        <h3 className="mb-0">
                        {page.name}
                        </h3>

                        <p className="mb-0 text-body-secondary">
                        Heres what we've been up to recently.
                        </p>

                    </div>
                    <div className="col-12 col-md-auto"></div>
                    </div> 
                    <div className="row">
                        {posts.data.map(post => (
                        <div key={post.id}  className="col-12 col-md-6 col-lg-4 d-flex">
                            <BlogGrid post={post} />
                        </div>
                            )
                        )}
                    </div>
                </div>
            </section>

        </MainLayout>
    )
}
