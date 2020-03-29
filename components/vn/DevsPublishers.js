const DevsPublishers = ({ developers, publishers }) => {
  return (
    <section className="vn-devs-pubs">
      <div className="developers">
        {developers.map((dev) => (
          <p key={dev.pid} style={{ fontWeight: 800, fontSize: '2rem' }}>
            {dev.name}
          </p>
        ))}
      </div>
      <div className="publishers" style={{ display: 'flex', flexDirection: 'row' }}>
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
      </div>
    </section>
  )
}

export default DevsPublishers
