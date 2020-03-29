const Screenshots = ({ screenshots }) => {
  const getImage = (shot) => {
    const imgId = shot.scr.slice(1, -1).split(',')[1]
    return (
      <img
        style={{ width: 120, height: 90 }}
        key={imgId}
        // src={`https://s2.vndb.org/sf/${imgId.slice(-2)}/${imgId}.jpg`}
      />
    )
  }

  return (
    <section className="vn-screenshots">
      {screenshots.map((rel) => (
        <div key={rel.rid}>{rel.rows.map((shot) => getImage(shot))}</div>
      ))}
    </section>
  )
}

export default Screenshots
