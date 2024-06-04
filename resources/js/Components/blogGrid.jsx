import { Link} from '@inertiajs/react'

export default function blogGrid({ post}){

    const detialsLink = post && post.slug ? route('blogView', post.slug) : route('blogView', 'no-title');

    return (
        <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
            <Link className="card-img-top" href={detialsLink}>
                <img src={post.image_url} alt={post.name} className="card-img-top" />
                <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>                  </div>
                </div>
            </Link>
            <Link className="card-body" href={detialsLink}>
                <h3>
                {post.name}
                </h3>
                <p className="mb-0 text-body-secondary">
                {post.short_description}
                </p>
            </Link>
            <Link className="card-meta mt-auto" href={detialsLink}>
                <hr className="card-meta-divider" />
                <div className="avatar avatar-sm me-2">
                    <img src={post.user_info.image_url} alt={post.user_info.name} className="avatar-img rounded-circle" />
                </div>
                <h6 className="text-uppercase text-body-secondary me-2 mb-0">
                {post.user_info.name}
                </h6>
                <p className="h6 text-uppercase text-body-secondary mb-0 ms-auto">
                <time>{post.formatted_created_at}</time>
                </p>
            </Link>
        </div> 
    );

}


