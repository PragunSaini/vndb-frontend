const Relations = ({ relations }) => {
  return (
    <section className="vn-relations">
      <h2>Relations</h2>
      {relations.map((rel) => (
        <div key={rel.relation}>
          <h3>{rel.relation}</h3>
          <ul>
            {rel.rows.map((vn) => (
              <li key={vn.id}>
                <a href="#">
                  {vn.official ? '' : '[Unofficial]'} {vn.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Relations
