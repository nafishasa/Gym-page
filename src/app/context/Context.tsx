"use client"

import { createContext, useState, type PropsWithChildren } from "react";

export const exerciseContext = createContext({})
const Context = ({ children }: PropsWithChildren) => {
    const [plan,setPlan]=useState([])
    const [save,setSave]=useState([])
     const [active, setActive] = useState("W");
    const shareData={
      save,setSave, plan,setPlan ,active,setActive
    }
    return (
        <div>
            <exerciseContext.Provider value={shareData}>{children}</exerciseContext.Provider>
        </div>
    );
};

export default Context;