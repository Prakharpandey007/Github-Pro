import { createContext, useContext, useEffect,useState } from "react";
import toast from "react-hot-toast";
export const AuthContext = createContext();
//to consume this context we create another hooks;
export const useAuthContext=()=>{
    return useContext(AuthContext);

}
//create context to  keep track of user is authenticated aur not
export const AuthContextProvider = ({ children }) => {
  const [authuser, setAuthUser] = useState(null);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    const checkUserLoggedIn=async()=>{
        setLoading(true);
        try {
        const res=await fetch("/api/auth/check",{credentials:"include"});
        const data=await res.json();
        setAuthUser(data.user);   //null aur authenticated user object


        } catch (error) {
            toast.error(error.messsage);
        }
    }
    checkUserLoggedIn();

  },[])
//we use loading state because without it when we refresh the page it takes to home page
//bt we want to keep on this page so we use it 

  return <AuthContext.Provider value={{authuser,setAuthUser,loading}}>
  {children}
  </AuthContext.Provider>;
};
