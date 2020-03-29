const Tags = ({ tags }) => {
  return (
    <section className="vn-tags" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tags
        .sort((taga, tagb) => parseFloat(tagb.rating) - parseFloat(taga.rating))
        .map((tag) => (
          <span key={tag.id} style={{ margin: '5px 10px' }}>
            {tag.name} {tag.rating}
          </span>
        ))}
    </section>
  )
}

export default Tags
