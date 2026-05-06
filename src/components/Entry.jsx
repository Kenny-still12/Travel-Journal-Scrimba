export default function Entry(props) {
    return (
        <main>
            <div className="entry-image">
                <img src={props.entry.img.src} alt={props.entry.img.alt} className="entry-image" />
            </div>
            <div className="entry-description">
                <div className="entry-location">
                    <img src="./image/location-pin.png" alt="" className="location-pin" />
                    <span>{props.entry.country}</span>
                    <a href={props.entry.link}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.entry.title}</h1>
                <div className="description">
                    <p className="entry-dates">{props.entry.dates}</p>
                    <p className="text">{props.entry.text}</p>
                </div>
            </div>


        </main>
    )
}