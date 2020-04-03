const Relations = ({ relations }) => {
  const mapRelRows = (rows) => {
    return rows.map((vn) => (
      <li key={vn.id}>
        <a href="#">
          {vn.official ? '' : '[Unofficial]'} {vn.title}
        </a>
      </li>
    ))
  }

  const renderRelations = () => {
    return relations.map((rel) => (
      <div key={rel.relation}>
        <h3>{rel.relation}</h3>
        <ul>{mapRelRows(rel.rows)}</ul>
      </div>
    ))
  }

  return (
    <section className="vn-relations">
      <h2>Relations</h2>
      {renderRelations()}
    </section>
  )
}

export default Relations
