import { useState, useEffect } from 'react'
import api from './api'

const useAxiosImage = (url) => {
  const [image, setImage] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(url, { responseType: 'blob' })
        if (response.status === 200) {
          const imageObjectURL = URL.createObjectURL(response.data)
          setImage(imageObjectURL)
        } else {
          setError(true)
        }
        
      } catch (error) {
        setError(true)

      } finally {
        setLoading(false)

      }
    })() // eslint-disable-next-line
  }, [])

  return { image, error, loading }
}

export default useAxiosImage