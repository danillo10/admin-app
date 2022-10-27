import { createContext, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true)

  return (
    <Context.Provider value={{ toggle, setToggle }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
