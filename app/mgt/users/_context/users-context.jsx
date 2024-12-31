import React from 'react'
import { User } from '../_data/schema'


const UsersContext = React.createContext(null)


export default function UsersContextProvider({ children, value }) {
  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => {
  const usersContext = React.useContext(UsersContext)

  if (!usersContext) {
    throw new Error(
      'useUsersContext has to be used within <UsersContext.Provider>'
    )
  }

  return usersContext
}
