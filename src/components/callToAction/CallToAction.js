import './callToAction.scss';

function CallToAction() {

    let notFunctional = () => {alert('This button is not functional yet!! Ideas for where it should go? Message the slack channel! :)')}

    return (
        <section className="callToAction">
            <p className="callToAction--text">See if companies you shop with are funding their insurrection.</p>
            <button className="callToAction--button" onClick={notFunctional} >
                TAKE ACTION
            </button>
        </section>
    )
}

export default CallToAction;