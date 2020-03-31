import { parse } from '../../utils/bbcode'

const Info = ({ vn }) => {
  const imageId = vn.image.slice(1, -1).split(',')[1]
  return (
    <section className="vn-info">
      <div className="desc">
        <h1>{vn.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: parse(vn.desc) }} />
      </div>
      <div className="info">
        <img src={`https://s2.vndb.org/cv/${imageId.slice(-2)}/${imageId}.jpg`} alt="" />
        <div className="alt-title">
          {vn.alias && <h2>{vn.alias.split('\n').join(', ')}</h2>}
          {vn.original && <h2>{vn.original}</h2>}
        </div>
        <div className="stats">
          <div className="popularity">Popularity: {Math.round(vn.c_popularity * 10000) / 100}</div>
          <div className="rating">Rating: {Math.round(vn.c_rating * 10) / 100}</div>
          <div className="length">Length: {vn.length}</div>
        </div>
      </div>
    </section>
  )
}

export default Info
