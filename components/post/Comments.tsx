import React from 'react'
import loadable from '@loadable/component'
const GitalkComponent = loadable(() => import('gitalk/dist/gitalk-component'))
import 'gitalk/dist/gitalk.css'
import { SiteMeta } from '../../site.config'
import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'

const Style = createGlobalStyle`
  p {
    color: ${(props: DefaultTheme) => props.theme.app.title}
  }
`

const Comments = () => {
  const { clientID, clientSecret, repo, owner, admin } = SiteMeta.gitalk
  return (
    <>
      <Style />
      <GitalkComponent
        options={{
          clientID: clientID,
          clientSecret: clientSecret,
          repo: repo,
          owner: owner,
          admin: admin,
        }}
      />
    </>
  )
}
export default Comments
