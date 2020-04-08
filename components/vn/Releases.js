import { Fragment, useState } from 'react'
import { parse } from '../../utils/bbcode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

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
      <h2>
        Releases <span>(click to expand)</span>
      </h2>
      {renderReleases()}
    </section>
  )
}

const ReleaseRow = ({ rel }) => {
  const [expand, setExpand] = useState(false)

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

  const freewareMap = (freeware) => (freeware ? 'Freeware' : 'Non-free')

  const doujinMap = (doujin) => (doujin ? 'Doujin' : 'Commercial')

  const getDetails = () => {
    return (
      <Fragment>
        {rel.resolution != 'unknown' && (
          <div className="desc">
            <div className="label">Resolution</div>
            <div className="value">{rel.resolution}</div>
          </div>
        )}
        <div className="desc">
          <div className="label">Type</div>
          <div className="value" style={{ textTransform: 'capitalize' }}>
            {rel.type}
          </div>
        </div>
        <div className="desc">
          <div className="label">Publication</div>
          <div className="value">
            {freewareMap(rel.freeware)}, {doujinMap(rel.doujin)}
          </div>
        </div>
        {rel.voiced && (
          <div className="desc">
            <div className="label">Voiced</div>
            <div className="value">{rel.voiced}</div>
          </div>
        )}
        {(rel.ani_story || rel.ani_ero) && (
          <div className="desc">
            <div className="label">Animation</div>
            {rel.ani_story && <div className="value">Story: {rel.ani_story}</div>}
            {rel.ani_ero && <div className="value">Ero scenes: {rel.ani_ero}</div>}
          </div>
        )}
        {rel.platform.length > 0 && (
          <div className="desc">
            <div className="label">Platforms</div>
            {rel.platform.map((plat) => (
              <div className="value" key={plat}>
                {plat}
              </div>
            ))}
          </div>
        )}
        {rel.notes && (
          <div className="desc notes">
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
    <div key={rel.id} className={`rel-row ${expand ? 'expand' : ''}`}>
      <div className="main-info" onClick={toggleExpand}>
        <span className="rel-name" title={rel.original}>
          {rel.title} {rel.patch && <span>(patch)</span>}{' '}
          {!expand ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
        </span>
        <span className="age">{getAge(rel.minage)}</span>
        <span className="released">{getDate(rel.released)}</span>
      </div>
      <div className={`more-info ${expand ? 'expand' : ''}`}>{getDetails()}</div>
    </div>
  )
}

export default Releases
