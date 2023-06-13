import { useQuery } from "react-query";
import { requestDataGet } from "../../services/Requests";

// Functions
export default function querysFunction() {
    const { isLoading, error, data } = useQuery<unknown | void>(['contents'], async () => {
        const response = await requestDataGet('http://localhost:3000/api/contents');
        return response;
    }, { refetchOnWindowFocus: false });
    return ({ isLoading, error, data });
}

// Arrow Functions
export const querysAerrorFunction = () => {   
    const { isLoading, error, data } = useQuery<unknown | void>(['contents'], async () => {
        const response = await requestDataGet('http://localhost:3000/api/contents');
        return response;
    }, { refetchOnWindowFocus: false });
    return ({ isLoading, error, data });
}