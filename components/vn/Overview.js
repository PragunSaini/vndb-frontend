import { parse } from '../../utils/bbcode'

const Overview = ({ vn }) => {
  return (
    <section className="vn-overview">
      <div className="vn-desc">
        <h1>{vn.title}</h1>
        <div className="desc">
          <p dangerouslySetInnerHTML={{ __html: parse(vn.desc) }} />
        </div>
      </div>
    </section>
  )
}

export default Overview
