import styles from '../../styles/test.module.scss'
import { getVN } from '../../utils/fetch'

const VN = (props) => {
  return (
    <div>
      <p>Allo</p>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  )
}

export async function getServerSideProps(context) {
  const vndata = await getVN(context.params.id)
  return { props: vndata }
}

export default VN
