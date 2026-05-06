export default function Entry(props) {
    return (
        <main>
            <div className="entry-image">
                <img src={props.src} alt={props.alt} className="entry-image" />
            </div>
            <div className="entry-description">
                <div className="entry-location">
                    <img src="./image/location-pin.png" alt="" className="location-pin" />
                    <span>{props.country}</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
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