import { createContext, useContext } from 'react'

const ButtonContext = createContext<null | unknown>(null)

export function useButtonContext() {
  const context = useContext(ButtonContext)
  if (!context) {
    throw new Error(
      'useButtonContext must be used within a ButtonContextProvider'
    )
  }
  return context
}

export default ButtonContext
