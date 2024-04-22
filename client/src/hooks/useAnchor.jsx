import { useState } from "react"

const useAnchor = () => {
  const [anchor, setAnchor] = useState(null)
  const openAnchor = Boolean(anchor)

  return [anchor, setAnchor, openAnchor]
}

export default useAnchor