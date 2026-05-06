import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {

  const entries = data.map(entry => {
    return <Entry
      key={entry.id}
      img={
        {
          src: entry.img.src,
          alt: entry.img.alt
        }}
      country={entry.country}
      link={entry.googleMapsLink}
      title={entry.title}
      dates={entry.dates}
      text={entry.text}
    />
  })

  return (
    <>
      <Header />
      {entries}
    </>
  )
}