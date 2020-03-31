const DevsPublishers = ({ developers, publishers }) => {
  return (
    <div className="vn-devs-pubs">
      <p className="devs">Developers</p>
      <p>
        {developers.map((dev, ind) => {
          if (ind > 0) {
            return (
              <>
                <span> & </span>
                <a href="#">{dev.name}</a>
              </>
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
          <span>{pubs.lang}</span>
          {pubs.rows.map((pub, ind) => {
            if (ind > 0) {
              return (
                <>
                  <span> & </span>
                  <a href="#">{pub.name}</a>
                </>
              )
            } else {
              return <a href="#">{pub.name}</a>
            }
          })}
        </p>
      ))}
    </div>
  )
}

export default DevsPublishers
