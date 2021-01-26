import './header.scss';
import SiteTitle from '../siteTitle/SiteTitle';
import Hero from '../hero/Hero';

function Header() {
    return (
        <header className="header">
            <SiteTitle />
            <Hero />
        </header>
    )
}

export default Header;