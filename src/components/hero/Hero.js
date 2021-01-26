import './hero.scss';

function Hero() {

    let scrollOnClick = (e) => {
        e.preventDefault();
        console.log('clicky click');
        let destination = document.getElementById('airtableEmbed').offsetTop;
        window.scroll({
            top: destination-150,
            behavior: 'smooth'
        })
    }

    return (
        <section className="hero">
            <h2 className="hero--titleText">Who's funding the Sedition Caucu$?</h2>
            <p className="hero--subText">Is it you?</p>
            <button className="hero--button" onClick={scrollOnClick}>SEE FUNDERS</button> 
        </section>
    )
}

export default Hero;