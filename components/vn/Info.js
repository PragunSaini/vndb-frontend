import { parse } from '../../utils/bbcode'

const Info = ({ vn, rankings }) => {
  const imageId = vn.image.slice(1, -1).split(',')[1]
  return (
    <section className="vn-info">
      <div className="desc">
        <h1>{vn.title}</h1>
        <div className="desc-desc">
          <p>Description</p>
          <p dangerouslySetInnerHTML={{ __html: parse(vn.desc) }} />
        </div>
        <div className="rankings">
          <p className="ranking-head">Stats</p>
          <p>
            Popularity: {Math.round(vn.c_popularity * 10000) / 100} ranked {rankings.popularityRank}
          </p>
          <p>
            Rating: {Math.round(vn.c_rating * 10) / 100} ranked {rankings.ratingRank}
          </p>
        </div>
      </div>
      <div className="info">
        <div className="vn-image">
          <img src={`https://s2.vndb.org/cv/${imageId.slice(-2)}/${imageId}.jpg`} alt="" />
        </div>
        {vn.original && (
          <div className="vn-group">
            <p>Original title: </p>
            <p>{vn.original}</p>
          </div>
        )}
        {vn.alias && (
          <div className="vn-group">
            <p>Aliases: </p>
            <p>{vn.alias.split('\n').join(', ')}</p>
          </div>
        )}
        <div className="vn-group">
          <p>Length: </p>
          <p>{vn.lengthDesc}</p>
        </div>
      </div>
    </section>
  )
}

export default Info
