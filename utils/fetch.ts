import fetch from 'isomorphic-unfetch'

const url = 'http://54.152.218.26:8000'

export async function getVN(id: number): Promise<any> {
  const data = await fetch(`${url}/vn/${id}`)
  return await data.json()
}
