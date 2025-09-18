export default function Entry(props) {

    return (
        <article className="journalEntry">
            <div className="imageContainer">
                <img
                    src={props.img.src}
                    alt={props.img.alt}
                    />
            </div>
            <section className="travelJournalInfo">
                <div className="travelJournalLocation">
                    <img src="src/components/TravelJournal/assets/marker.png" alt="map marker"/>
                    <span className="country">{props.country}</span>
                    <a className="googleMapLink" href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h2>{props.dates}</h2>
                <p>{props.text}</p>
            </section>
        </article>
    )
}