import * as React from 'react'
import '@fontsource/raleway'
import { navigate } from 'gatsby'

const IndexPage = () => {
  if (typeof window !== 'undefined') navigate('/about')
  return null
}
export default IndexPage
