import React, { createContext, useState } from 'react'

export const sortContext = createContext()

function ContextShare({children}) {

    const [sortValue, setSortValue] = useState("")

  return (
    <>

        <sortContext.Provider value={{sortValue, setSortValue}}>
            {children}
        </sortContext.Provider>

    </>
  )
}

export default ContextShare