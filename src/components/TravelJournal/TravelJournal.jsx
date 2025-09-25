import './TravelJournal.css'
import Entry from "./Entry"
import data from "./data.js"

export default function TravelJournal() {

const entryElements = data.map((entry) => {
    return (
        <Entry 
            key={entry.id}
            {...entry}
        />
    )}
)

    return (
        <main className='travel-journal-main'>
            <header>
                <img className="headerIcon" src="/assets/travel-journal-assets/globe.png" alt="globe icon" />
                <span>my travel journal, 2025</span>
            </header>
            {entryElements}
        </main>
    )
}