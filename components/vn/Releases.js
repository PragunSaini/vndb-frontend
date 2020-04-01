import { Fragment } from 'react'

const Releases = ({ releases }) => {
  const renderLangReleases = (rows) => {
    return rows.map((row) => <li key={row.id}>{row.title}</li>)
  }

  const renderReleases = () => {
    return releases.map((lang) => (
      <Fragment key={lang.lang}>
        <h3 className="release-lang">
          <abbr className={`icons lang ${lang.lang}`} title={lang.lang} />
          {lang.lang}
        </h3>
        <ul>{renderLangReleases(lang.rows)}</ul>
      </Fragment>
    ))
  }

  return (
    <section className="vn-releases">
      <h2>Releases</h2>
      {renderReleases()}
    </section>
  )
}

export default Releases
