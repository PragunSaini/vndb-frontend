import { Fragment } from 'react'

const DevsPublishers = ({ developers, publishers }) => {
  return (
    <div className="vn-devs-pubs">
      <p className="devs">Developers</p>
      <p>
        {developers.map((dev, ind) => {
          if (ind > 0) {
            return (
              <Fragment key={dev.pid}>
                <span> & </span>
                <a href="#">{dev.name}</a>
              </Fragment>
            )
          } else {
            return (
              <a key={dev.pid} href="#">
                {dev.name}
              </a>
            )
          }
        })}
      </p>
      <p className="pubs">Publishers</p>
      {publishers.map((pubs) => (
        <p key={pubs.lang}>
          <abbr className={`icons lang ${pubs.lang}`} title={pubs.lang} />
          {pubs.rows.map((pub, ind) => {
            if (ind > 0) {
              return (
                <Fragment key={pub.pid}>
                  <span> & </span>
                  <a href="#">{pub.name}</a>
                </Fragment>
              )
            } else {
              return (
                <a key={pub.id} href="#">
                  {pub.name}
                </a>
              )
            }
          })}
        </p>
      ))}
    </div>
  )
}

export default DevsPublishers
