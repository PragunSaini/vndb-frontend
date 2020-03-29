const Releases = ({ releases }) => {
  return (
    <section className="vn-releases">
      {releases.map((lang) => (
        <div key={lang.lang}>
          <h3>{lang.lang}</h3>
          {lang.rows.map((rel) => (
            <p key={rel.id}>
              {new Date(rel.released).getFullYear()} - {rel.minage == 0 ? 'All ages' : rel.minage} -{' '}
              {rel.platform.map((plat) => plat[0].toUpperCase())} -{' '}
              <strong>
                {rel.title} {rel.patch ? '(patch)' : ''}
              </strong>
            </p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Releases
