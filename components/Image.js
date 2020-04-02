const Image = ({ vn }) => {
  const imageId = vn.image.slice(1, -1).split(',')[1]
  return (
    <div className="vn-image">
      <img src={`https://s2.vndb.org/cv/${imageId.slice(-2)}/${imageId}.jpg`} alt="" />
    </div>
  )
}

export default Image
