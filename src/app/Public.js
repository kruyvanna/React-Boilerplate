import React from 'react'
import { observer } from 'mobx-react-lite'
import { rootStore } from './Models/RootStore'

const { userStore } = rootStore

export const PublicPage = observer(() => {
  return (
    <div className="container">
      <h2>Public Page Content Here</h2>
      <div>User store status</div>
      <div>{userStore.status}</div>
      <button
        onClick={() => {
          userStore.changeStatus('loaded')
        }}
      >
        Set Status to loaded
      </button>
    </div>
  )
})
// export default {
//   PublicPage: observer(PublicPage)
// }
