import { useState, createContext } from "react";

export const SiteContext = createContext();

export function SiteContextProvider({children}) {
  const [tasks, setTasks] = useState([]);

  return (
    <SiteContext.Provider value={{tasks,setTasks}}>
      {children}
    </SiteContext.Provider>
  )
}