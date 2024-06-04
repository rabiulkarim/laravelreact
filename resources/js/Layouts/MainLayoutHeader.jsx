import { Link } from '@inertiajs/react';
import logo from '../../../public/assets/img/brand.svg';

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <img src={logo} className="navbar-brand-img" alt="..." />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarCollapse">
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fe fe-x"></i>
                </button>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="/about-us">
                        About us
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/services">
                        Services
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/contact-us" >
                        Contact Us
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/blogs" >
                        Blogs
                    </Link>
                    </li>
                </ul>
                <a className="navbar-btn btn btn-sm btn-primary lift ms-auto" href="https://themes.getbootstrap.com/product/landkit/" target="_blank">
                    Buy now
                </a>
                </div>
            </div>
        </nav>
    );
}