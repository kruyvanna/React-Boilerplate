export const auth = {
  isAuthenticated() {
    return localStorage.getItem('token') !== null
  },
  authenticate(cb) {
    // auth.isAuthenticated = true
    localStorage.setItem('token', 'authenticated')
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    // auth.isAuthenticated = false
    localStorage.removeItem('token')
    setTimeout(cb, 100)
  }
}
