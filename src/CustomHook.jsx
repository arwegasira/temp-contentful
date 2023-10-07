import { createClient } from 'contentful'
import { useEffect } from 'react'
import { useState } from 'react'
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_KEY,
  environment: 'master',
})

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const fetchData = async () => {
    try {
      let response = await client.getEntries({ content_type: 'projects' })
      response = response.items.map((item) => {
        const id = item.sys.id
        const { title, url } = item.fields
        const img = item.fields?.image?.fields?.file?.url
        return { id, title, url, img }
      })
      setIsLoading(false)
      setProjects(response)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { isLoading, projects }
}
