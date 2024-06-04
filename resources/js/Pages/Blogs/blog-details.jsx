import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import BlogGrid from "../../Components/blogGrid";
import instagram from '../../../../public/assets/img/icons/social/instagram.svg';
import facebook from '../../../../public/assets/img/icons/social/facebook.svg';
import twitter from '../../../../public/assets/img/icons/social/twitter.svg';
export default function details({post,relatedPosts}){
    const canonicalLink = post && post.slug ? route('blogView', post.slug) : route('blogView', 'no-title');
    return (
        <MainLayout>
            <Head>
                <title>{post.name}</title>
                <meta name="title" property="og:title" content={post.name}/>
                <meta name="description" property="og:description" content="Thi si meta description Text" />
                <meta name="keyword" property="og:keyword" content="This is mete keyword text" />
                <meta name="image" property="og:image" content="this is logo" />
                <meta name="url" property="og:url" content={canonicalLink} />
                <link rel="canonical" href={canonicalLink} />
            </Head>

            <section className="pt-8 pt-md-11">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                        <h1 className="display-4 text-center">{post.name}</h1>
                        <div className="row align-items-center py-5 border-top border-bottom">
                        <div className="col-auto">
                            <div className="avatar avatar-lg">
                            <img src={post.user_info.image_url} alt={post.user_info.name} className="avatar-img rounded-circle" />
                            </div>

                        </div>
                        <div className="col ms-n5">
                            <h6 className="text-uppercase mb-0">{post.user_info.name}</h6>
                            <time className="fs-sm text-body-secondary">
                            Published on {post.formatted_created_at}
                            </time>
                        </div>
                        <div className="col-auto">
                            <span className="h6 text-uppercase text-body-secondary d-none d-md-inline me-4">
                                Share:
                            </span>
                            <ul className="d-inline list-unstyled list-inline list-social">
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                <img src={instagram} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                <img src={facebook} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                <img src={twitter} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                            <figure className="figure mb-7">
                                <img className="figure-img img-fluid rounded lift lift-lg" src={post.image_url} alt={post.name} />
                            </figure>
                            <div className="blog-details" dangerouslySetInnerHTML={{ __html: post.description }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-6 pt-md-8 mb-7">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md">
                            <h3 className="mb-0">Related Blog</h3>
                            <p className="mb-0 text-body-secondary">
                            Heres what we've been up to recently.
                            </p>
                        </div>
                        <div className="col-12 col-md-auto"></div>
                    </div>
                    <div className="row">
                        {relatedPosts.map(post => (
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
