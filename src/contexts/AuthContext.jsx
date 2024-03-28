import React, { useState, useEffect, useContext} from "react";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
      const checkAuth = ()=>{
        const hasAccess = localStorage.getItem('user')
        if(hasAccess){
            setIsAuthenticated(true)
        }
      }
      checkAuth()
    }, [])

    const value = {
        isAuthenticated,
        setIsAuthenticated
    } 
    
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}



