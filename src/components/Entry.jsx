export default function Entry(props) {
    return (
        <main>
            <div className="entry-image">
                <img src={props.img.src} alt={props.img.alt} className="entry-image" />
            </div>
            <div className="entry-description">
                <div className="entry-location">
                    <img src="./image/location-pin.png" alt="" className="location-pin" />
                    <span>{props.country}</span>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.title}</h1>
                <div className="description">
                    <p className="entry-dates">{props.dates}</p>
                    <p className="text">{props.text}</p>
                </div>
            </div>


        </main>
    )
}