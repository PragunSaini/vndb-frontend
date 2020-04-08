// import { getVN } from '../../utils/fetch'
import Head from 'next/head'
import Navbar from '../../components/vn/Navbar'
import Overview from '../../components/vn/Overview'
import Image from '../../components/vn/Image'
import Stats from '../../components/vn/Stats'
import Relations from '../../components/vn/Relations'
import Characters from '../../components/vn/Characters'
import Releases from '../../components/vn/Releases'

import data from '../../mockdata.json'

// import Anime from '../../components/vn/Anime'
// import Staff from '../../components/vn/Staff'
// import Tags from '../../components/vn/Tags'
// import Screenshots from '../../components/vn/Screenshots'

const Index = () => {
  return (
    <main className="vn">
      <Head>
        <title>{data.vn.title}</title>
      </Head>
      <Navbar />
      <article className="vn-data">
        <div className="data-left">
          <Overview vn={data.vn} />
          <Relations relations={data.relations} />
          <Characters chars={data.chars} />
          <Releases releases={data.releases} />
        </div>
        <div className="data-right">
          <Image vn={data.vn} />
          <Stats vn={data.vn} rankings={data.ratings} />
        </div>
        {/*<hr />
        <Anime anime={data.anime} />
        <hr />
        <Staff staff={data.staff} />
        <hr />
        <Characters chars={data.chars} />
        <hr />
        <Tags tags={data.tags} />
        <hr />
        <Screenshots screenshots={data.screenshots} />
        <hr />*/}
      </article>
    </main>
  )
}

export default Index
