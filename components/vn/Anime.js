const Anime = ({ anime }) => {
  return (
    <section className="vn-anime">
      {anime.map((anime) => (
        <p key={anime.aid}>
          [{anime.ann_id ? anime.ann_id : ''}-{anime.nfo_id ? anime.nfo_id : ''}] {anime.title_romaji} {anime.type}{' '}
          {anime.year}
        </p>
      ))}
    </section>
  )
}

export default Anime
