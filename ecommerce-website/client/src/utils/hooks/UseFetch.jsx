import { useEffect, useState } from "react"
import getServices from "../getServices"

const UseFetch = (url) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await getServices(url)
        setItems(res?.data?.data)
      } catch(err) {
        setError(true)
        console.error(err)
      }
      setLoading(false)
    }
    getData()
  }, [url])
  return {items, loading, error}
}
export default UseFetch