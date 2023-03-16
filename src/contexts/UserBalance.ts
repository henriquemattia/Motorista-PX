import { createContext, useContext } from "react"

export type TypeUserBalance = {
    balance: number;
    setBalance:(c: number) => void 
  }
  const UserBalance = createContext<TypeUserBalance>({
  balance: 0, // set a default value
  setBalance: () => {},
  })
  export default UserBalance