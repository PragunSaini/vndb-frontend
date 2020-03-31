import { parse } from '../../utils/bbcode'

const Characters = ({ chars }) => {
  const charDesc = (char) => {
    const data = char
    // const imgId = data.image.slice(1, -1).split(',')[1]
    return (
      <div key={char.id} style={{ filter: data.spoil > 0 ? 'blur(50px)' : '', display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '20px' }}>
          {/* <img src={`https://s2.vndb.org/ch/${imgId.slice(-2)}/${imgId}.jpg`} /> */}
        </div>
        <div>
          <h4>{data.name}</h4>
          <p>{data.original}</p>
          <p>{data.alias}</p>
          <p dangerouslySetInnerHTML={{ __html: parse(data.desc) }}></p>
        </div>
      </div>
    )
  }

  return <section className="vn-chars">{chars.map((char) => charDesc(char))}</section>
}

export default Characters
