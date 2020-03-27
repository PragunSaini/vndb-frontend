import { parse } from '../../utils/bbcode'

const Info = ({ vn }) => {
  return (
    <>
      <div>{parse('apples are [url=https://google.com]Google[/url]')}</div>
    </>
  )
}

export default Info
