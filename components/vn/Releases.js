import { Fragment, useState } from 'react'
import { parse } from '../../utils/bbcode'

const Releases = ({ releases }) => {
  const renderReleaseRows = (rows) => {
    return rows.sort((r1, r2) => r1.released - r2.released).map((rel) => <ReleaseRow key={rel.id} rel={rel} />)
  }

  const renderReleases = () => {
    return releases.map((langRel) => (
      <div key={langRel.lang} className="language-grp">
        <h3>
          <abbr className={`icons lang ${langRel.lang}`} title={langRel.language} />
          {langRel.language.split(';')[0]}
        </h3>
        <div className="language-releases">{renderReleaseRows(langRel.rows)}</div>
      </div>
    ))
  }

  return (
    <section className="vn-releases">
      <h2>Releases</h2>
      {renderReleases()}
    </section>
  )
}

const ReleaseRow = ({ rel }) => {
  const [expand, setExpand] = useState(true)

  const toggleExpand = () => {
    setExpand(!expand)
  }

  const getDate = (date) => {
    let dateStr = ''
    const year = Math.floor(date / 10000)
    dateStr += year + '-'
    date %= 10000
    const month = Math.floor(date / 100)
    dateStr += (month < 10 ? '0' + month : month) + '-'
    date %= 100
    dateStr += date < 10 ? '0' + date : date
    return dateStr
  }

  const getAge = (age) => {
    if (age > 0) {
      return age + '+'
    }
    if (age == 0) {
      return 'All ages'
    }
    if (age == -1) {
      return ''
    }
  }

  const getDetails = () => {
    return (
      <Fragment>
        {rel.resolution != 'unknown' && (
          <div className="desc">
            <div className="label">Resolution</div>
            <div className="value">{rel.resolution}</div>
          </div>
        )}
        {rel.notes && (
          <div className="desc">
            <div className="label">Notes</div>
            <div className="value">
              <p dangerouslySetInnerHTML={{ __html: parse(rel.notes) }} />
            </div>
          </div>
        )}
      </Fragment>
    )
  }

  return (
    <div key={rel.id} className={`rel-row ${expand ? 'expand' : ''}`} onClick={toggleExpand}>
      <div className="main-info">
        <span className="rel-name" title={rel.original}>
          {rel.title} {rel.patch && <span>(patch)</span>}
        </span>
        <span className="age">{getAge(rel.minage)}</span>
        <span className="released">{getDate(rel.released)}</span>
      </div>
      <div className={`more-info ${expand ? 'expand' : ''}`}>{getDetails()}</div>
    </div>
  )
}

export default Releases
