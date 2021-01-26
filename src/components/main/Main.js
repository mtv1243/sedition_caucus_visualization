import './main.scss';
import Header from '../header/Header';
import AboutSection from '../aboutSection/AboutSection';
import CallToAction from '../callToAction/CallToAction';
import AirtableEmbed from '../airtableEmbed/AirTableEmbed';

function Main() {
    return (
        <main className="main">
            <Header />
            <AboutSection />
            <CallToAction />
            <AirtableEmbed />
        </main>
    )
}

export default Main;