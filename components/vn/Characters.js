import { useState, useRef, useEffect } from 'react'
import { parse } from '../../utils/bbcode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

const Characters = ({ chars }) => {
  const [summary, setSummary] = useState(false)
  const [spoilers, setSpoilers] = useState(false)

  const roleMapper = {
    main: 'Protagonist',
    primary: 'Main character',
    side: 'Side character',
    appears: 'Appears',
  }

  const roleMapperHead = {
    main: 'Protagonist',
    primary: 'Main characters',
    side: 'Side characters',
    appears: 'Make an appearance',
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

  // Summary version

  const characterSummary = (char) => {
    return (
      <div key={char.id} className="char">
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
        <div className="summary">{summarize()}</div>
      </>
    )
  }

  // Description version

  const renderRoleChars = (chars) => {
    return chars.map((char) => <Character key={char.id} char={char} spoilers={spoilers} />)
  }

  const getCharsOfRole = (role) => {
    return chars.filter((char) => {
      if (char.role == role) {
        if (spoilers || (!spoilers && char.spoil == 0)) {
          return true
        }
      }
      return false
    })
  }

  const expand = () => {
    const roles = ['main', 'primary', 'side', 'appears']
    return roles.map((role) => (
      <div key={role} className="role">
        <h4>{roleMapperHead[role]}</h4>
        <>{renderRoleChars(getCharsOfRole(role))}</>
      </div>
    ))
  }

  const renderDescriptions = () => {
    return (
      <>
        <div className="characters">{expand()}</div>
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

const Character = ({ char, spoilers }) => {
  const imgId = char.image.slice(1, -1).split(',')[1]

  const getSpans = (list) => {
    return list.map((item, ind) => {
      if (ind == list.length - 1) {
        return <span key={item}>{item}</span>
      } else {
        return <span key={item}>{item}, </span>
      }
    })
  }

  return (
    <div key={char.id} className="char">
      <div className="char-image">
        <img src={`https://s2.vndb.org/ch/${imgId.slice(-2)}/${imgId}.jpg`} />
      </div>
      <div className="char-info">
        <p className="name">
          <span> {char.name} </span>
          <span title={char.gender == 'm' ? 'Male' : 'Female'}>
            {char.original}{' '}
            {char.gender == 'm' ? <FontAwesomeIcon icon={faMars} /> : <FontAwesomeIcon icon={faVenus} />}
          </span>
        </p>
        <div className="desc">
          {char.bloodt != 'unknown' && (
            <>
              <p className="label">Blood Group</p>
              <p className="value bloodtype">{char.bloodt}</p>
            </>
          )}
          {char.alias && (
            <>
              <p className="label">Aliases</p>
              <p className="value">{getSpans(char.alias.split('\n'))}</p>
            </>
          )}
          {char.sei_name.length > 0 && (
            <>
              <p className="label">Voiced by</p>
              {char.sei_name.map((name, ind) => (
                <>
                  <p key={char.sei_id[ind]} className="value seiyuu">
                    {name} <span>{char.note[ind]}</span>
                  </p>
                </>
              ))}
            </>
          )}
          <p className="label description">Description</p>
          <p
            className={`value ${!spoilers ? 'no-spoil-desc' : ''}`}
            dangerouslySetInnerHTML={{ __html: parse(char.desc) }}
          />
        </div>
      </div>
    </div>
  )
}

export default Characters
