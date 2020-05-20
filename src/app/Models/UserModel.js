import { types, flow } from 'mobx-state-tree'

const User = types.model({
  id: '',
  name: '',
  username: '',
  role: ''
})

export const UserStore = types
  .model({
    status: '',
    users: types.array(User),
    currentUser: types.maybe(User),
    isLoggedIn: false
  })
  .actions((self) => ({
    setIsLoggedIn(newStatus) {
      self.isLoggedIn = newStatus
    },
    changeStatus(newStatus) {
      self.status = newStatus
    },
    setCurrentUser(newUser) {
      self.currentUser = newUser
    }
  }))

export const userStore = UserStore.create({
  status: 'loading',
  isLoggedIn: false
})
