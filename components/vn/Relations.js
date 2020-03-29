const Relations = ({ relations }) => {
  return (
    <section className="vn-relations" style={{ display: 'flex' }}>
      {relations.map((rel) => (
        <div key={rel.relation} style={{ width: '33%' }}>
          <h3>{rel.relation}</h3>
          {rel.rows.map((vn) => (
            <p key={vn.id}>
              {vn.official ? '' : '[Unofficial]'} {vn.title}
            </p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Relations
