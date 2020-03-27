// import { getVN } from '../../utils/fetch'
import Navbar from '../../components/vn/Navbar'
import Info from '../../components/vn/Info'

const Index = () => {
  return (
    <>
      <Navbar />
      <Info vn={{ desc: 'apples' }} />
    </>
  )
}

// export async function getServerSideProps() {
//   const data = await getVN(220)
//   return {
//     props: data,
//   }
// }

export default Index
