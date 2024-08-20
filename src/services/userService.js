import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUserData = async ()=>{
    

    return axios.get("https://node5.onrender.com/user/user")
}

//[] = useSate
//custome hoook -> useState 
//hook -> useFetchUserData
export const useFetchUserData = ()=>{


    return useQuery({
        queryKey:["userData"],
        queryFn:fetchUserData,
        enabled:false,
        refetchOnMount:false,
    })
}
