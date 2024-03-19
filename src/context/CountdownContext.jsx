import React, { useState } from 'react'

export const CountdownContext = React.createContext(null)

export const CountdownProvider = ({ children }) => {
  const [data, setData] = useState(null)

  return (
    <CountdownContext.Provider value={{ data, setData }}>
      {children}
    </CountdownContext.Provider>
  )
}
