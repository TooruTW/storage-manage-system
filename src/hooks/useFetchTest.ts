import { useQuery } from "@tanstack/react-query"
import { fetchTest } from "../api/fetchTest"


export const useFetchTest = ()=>(
    useQuery({
        queryKey: ["fetchTest"],
        queryFn: fetchTest
    })
)