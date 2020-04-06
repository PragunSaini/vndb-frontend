import { useState } from 'react'
import { parse } from '../../utils/bbcode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

const Characters = ({ chars }) => {
  const [summary, setSummary] = useState(true)
  const [spoilers, setSpoilers] = useState(false)

  const roleMapper = {
    main: 'Protagonist',
    primary: 'Main character',
    side: 'Side character',
    appears: 'Appears',
  }

  const compareChars = (a, b) => {
    if (a.role == b.role) {
      return 0
    }
    if (a.role == 'main') {
      return -1
    }
    if (a.role == 'primary' && b.role != 'main') {
      return -1
    }
    if (a.role == 'side' && b.role != 'primary' && b.role != 'main') {
      return -1
    }
    return 1
  }

  const characterSummary = (char) => {
    return (
      <div className="char">
        <div className="head">
          {char.gender == 'm' ? <FontAwesomeIcon icon={faMars} /> : <FontAwesomeIcon icon={faVenus} />}
          <p className="name">{char.name}</p>
          <p className="role">{roleMapper[char.role]}</p>
        </div>
        {char.sei_name.length > 0 && (
          <div className="seiyuu">
            <p>Voiced by</p>
            {char.sei_name.map((name, ind) => (
              <div className="sei-name" key={char.sei_id[ind]}>
                {name}
                <span className="sei-note">{char.note[ind]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // const imgId = data.image.slice(1, -1).split(',')[1]

  const summarize = () => {
    const characters = chars.sort(compareChars).filter((char) => {
      if (spoilers || (!spoilers && char.spoil == 0)) {
        return true
      }
      return false
    })
    return characters.map((char) => characterSummary(char))
  }

  const renderSummary = () => {
    return (
      <>
        <h3>Character Summary</h3>
        <div className="summary">{summarize()}</div>
      </>
    )
  }

  const renderDescriptions = () => {
    return (
      <>
        <h3>Characters</h3>
      </>
    )
  }

  return (
    <section className="vn-chars">
      <h2>Characters</h2>
      <div className="tabs">
        <button
          className="summary"
          onClick={() => setSummary(true)}
          style={{
            color: summary ? '#394552' : '#394552be',
          }}
        >
          Summary
        </button>
        <button
          className="description"
          onClick={() => setSummary(false)}
          style={{
            color: !summary ? '#394552' : '#394552be',
          }}
        >
          Description
        </button>
        <button
          className="spoiler-btn"
          onClick={() => setSpoilers(!spoilers)}
          style={{
            color: spoilers ? '#000' : '#394552be',
          }}
        >
          Show spoilers
        </button>
      </div>
      <div className="content">{summary ? renderSummary() : renderDescriptions()}</div>
    </section>
  )
}

export default Characters
