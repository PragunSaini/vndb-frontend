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
          <span className={`flag-icon flag-icon-${pubs.lang}`} />
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
      {/* <div className="publishers" style={{ display: 'flex', flexDirection: 'row' }}>
        {publishers.map((lang) => (
          <div key={lang.lang} style={{ padding: '0 20px' }}>
            {
              <>
                <h3>{lang.lang}</h3>
                {lang.rows.map((pub) => (
                  <p key={pub.pid}>{pub.name}</p>
                ))}
              </>
            }
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default DevsPublishers
