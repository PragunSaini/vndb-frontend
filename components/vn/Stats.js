import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

const Stats = ({ vn, rankings }) => {
  return (
    <div className="vn-stats">
      <div className="rank">
        <FontAwesomeIcon icon={faStar} />
        {rankings.ratingRank == null ? (
          <p>Not ranked</p>
        ) : (
          <p>
            #<strong>{rankings.ratingRank}</strong> Highest Rated All Time
          </p>
        )}
      </div>
      <div className="popularity">
        <FontAwesomeIcon icon={faHeart} />
        {rankings.popularityRank == null ? (
          <p>Not popular</p>
        ) : (
          <p>
            #<strong>{rankings.popularityRank}</strong> Most Popular All Time
          </p>
        )}
      </div>

      <div className="info">
        <div className="stat">
          <p className="stat-head">Length</p>
          <p className="stat-value">{vn.lengthDesc}</p>
        </div>

        {vn.c_popularity && (
          <div className="stat">
            <p className="stat-head">Popularity</p>
            <p className="stat-value">{Math.round(vn.c_popularity * 10000) / 100}</p>
          </div>
        )}

        {vn.c_rating && (
          <div className="stat">
            <p className="stat-head">Rating</p>
            <p className="stat-value">{Math.round(vn.c_rating * 10) / 100}</p>
          </div>
        )}

        <div className="stat">
          <p className="stat-head">Votes</p>
          <p className="stat-value">{vn.c_votecount}</p>
        </div>

        {vn.original && (
          <div className="stat">
            <p className="stat-head">Original</p>
            <p className="stat-value">{vn.original}</p>
          </div>
        )}

        {vn.alias && (
          <div className="stat">
            <p className="stat-head">Aliases</p>
            {vn.alias.split('\n').map((alias) => (
              <p key={alias} className="stat-value">
                {alias}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Stats
