import { useQuery } from "react-query";
import { requestDataGet } from "../../services/Requests";
import { variaveis } from "../../utils/variaveis.";

const { endPointApiContents } = variaveis();

// Functions
export default function querysFunction() {
    const { isLoading, error, data } = useQuery<unknown | void>(['contents'], async () => {
        const response = await requestDataGet(endPointApiContents);
        return response;
    }, { refetchOnWindowFocus: false });
    return ({ isLoading, error, data });
}

// Arrow Functions
export const querysAerrorFunction = () => {   
    const { isLoading, error, data } = useQuery<unknown | void>(['contents'], async () => {
        const response = await requestDataGet(endPointApiContents);
        return response;
    }, { refetchOnWindowFocus: false });
    return ({ isLoading, error, data });
}