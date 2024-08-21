import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUserData = async ()=>{
    

    return axios.get("https://node5.onrender.com/user/user") //returrn axios response
}

//[] = useSate
//custome hoook -> useState 
//hook -> useFetchUserData
export const useFetchUserData = ()=>{


    //state...function
    return useQuery({
        queryKey:["userData"],
        queryFn:fetchUserData,
        enabled:false,
        refetchOnMount:false,
    })
}



const addUserData = async (data)=>{

    console.log("data...",data)
    return axios.post("https://node5.onrender.com/user/user",data)

}
export const useAddUserData = ()=>{

    return useMutation({
        mutationKey:["addUserData"],
        mutationFn:addUserData
    })
}