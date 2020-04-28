import React, { useState, createContext } from 'react'

export const UserContext = createContext([])

export const UserContextProvider = (props) => {
  let savedUser = localStorage.getItem('user')
  if (savedUser) {
    savedUser = JSON.parse(savedUser)
  } else {
    savedUser = {}
  }

  const [user, setUser] = useState(savedUser)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}
