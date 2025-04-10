
"use client";

import { createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  return (
    <GlobalContext.Provider value={{}}> 
      {children}
    </GlobalContext.Provider>
  )
}