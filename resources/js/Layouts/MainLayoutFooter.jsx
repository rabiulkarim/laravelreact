import logo from '../../../public/assets/img/brand.svg';
import instagram from '../../../public/assets/img/icons/social/instagram.svg';

export default function Footer(){
    return(
        <footer className="py-8 py-md-11 bg-gray-200">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <img src={logo} alt="..." className="footer-brand img-fluid mb-2" />
                    <p className="text-gray-700 mb-2">
                        A better way to build.
                    </p>
                    <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                    <li className="list-inline-item list-social-item me-3">
                        <a href="#!" className="text-decoration-none">
                        <img src={instagram} className="list-social-icon" alt="..." />
                        </a>
                    </li>
                    <li className="list-inline-item list-social-item me-3">
                        <a href="#!" className="text-decoration-none">
                        <img src={instagram} className="list-social-icon" alt="..." />
                        </a>
                    </li>
                    <li className="list-inline-item list-social-item me-3">
                        <a href="#!" className="text-decoration-none">
                        <img src={instagram} className="list-social-icon" alt="..." />
                        </a>
                    </li>
                    <li className="list-inline-item list-social-item">
                        <a href="#!" className="text-decoration-none">
                        <img src={instagram} className="list-social-icon" alt="..." />
                        </a>
                    </li>
                    </ul>
            
                </div>
                <div className="col-6 col-md-4 col-lg-2">
            
                    <h6 className="fw-bold text-uppercase text-gray-700">
                    Products
                    </h6>
            
                    <ul className="list-unstyled text-body-secondary mb-6 mb-md-8 mb-lg-0">
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Page Builder
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        UI Kit
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Styleguide
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Documentation
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-reset">
                        Changelog
                        </a>
                    </li>
                    </ul>
            
                </div>
                <div className="col-6 col-md-4 col-lg-2">

                    <h6 className="fw-bold text-uppercase text-gray-700">
                    Services
                    </h6>
            
                    <ul className="list-unstyled text-body-secondary mb-6 mb-md-8 mb-lg-0">
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Documentation
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Changelog
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Pagebuilder
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-reset">
                        UI Kit
                        </a>
                    </li>
                    </ul>
            
                </div>
                <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
            
                    <h6 className="fw-bold text-uppercase text-gray-700">
                    Connect
                    </h6>

                    <ul className="list-unstyled text-body-secondary mb-0">
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Page Builder
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        UI Kit
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Styleguide
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Documentation
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Changelog
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Documentation
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-reset">
                        Changelog
                        </a>
                    </li>
                    </ul>
            
                </div>
                <div className="col-6 col-md-4 col-lg-2">
            
                    <h6 className="fw-bold text-uppercase text-gray-700">
                    Legal
                    </h6>
            
                    <ul className="list-unstyled text-body-secondary mb-0">
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Documentation
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#!" className="text-reset">
                        Changelog
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-reset">
                        Pagebuilder
                        </a>
                    </li>
                    </ul>
            
                </div>
                </div>
            </div> 
        </footer>
    );
}