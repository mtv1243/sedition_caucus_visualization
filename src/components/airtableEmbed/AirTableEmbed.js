import './airtableEmbed.scss';

function AirTableEmbed() {
    return (
        <section id="airtableEmbed" className="airtableEmbed">
            <iframe className="airtable-embed" src="https://airtable.com/embed/shrcjsZQIHecEQdXf?backgroundColor=red&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
        </section>
    )
}

export default AirTableEmbed;