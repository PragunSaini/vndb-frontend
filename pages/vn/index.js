// import { getVN } from '../../utils/fetch'
import Head from 'next/head'
import Navbar from '../../components/vn/Navbar'
import Info from '../../components/vn/Info'
import data from '../../mockdata.json'
import Relations from '../../components/vn/Relations'
import Releases from '../../components/vn/Releases'
// import Anime from '../../components/vn/Anime'
// import Staff from '../../components/vn/Staff'
// import Characters from '../../components/vn/Characters'
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
        <Info vn={data.vn} rankings={data.rankings} />
        <Relations relations={data.relations} />
        <Releases releases={data.releases} />
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
