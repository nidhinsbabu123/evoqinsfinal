import React, { createContext, useState } from 'react'

export const sortContext = createContext()
export const searchContext = createContext()
export const searchTextContext = createContext()

function ContextShare({ children }) {

  const [sortValue, setSortValue] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [searchTextBox, setSearchTextBox] = useState(null)


  return (
    <>

      <sortContext.Provider value={{ sortValue, setSortValue }}>
        <searchContext.Provider value={{ searchValue, setSearchValue }}>
          <searchTextContext.Provider value={{ searchTextBox, setSearchTextBox }}>
            {children}
          </searchTextContext.Provider>
        </searchContext.Provider>
      </sortContext.Provider>

    </>
  )
}

export default ContextShare