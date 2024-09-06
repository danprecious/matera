import { redirect } from "next/navigation";
import { credentialLogin } from "./authenticate"

export const performLogin = async (e) =>{
    try {
        const formData = new FormData(e.currentTarget)
        const response = await credentialLogin(formData);
        
        if(!!response.error){
            return response.error.message;
        }
        else {
            // redirect('/dashboard');
            return response;
        }

    } catch (error) {
        throw new Error("incorrect credentials");
        // console.error(error);
    }
}