"use server"

import { API_URL } from "@/constants";
import { authHeaders } from '../../helpers/authHeaders';
import { revalidateTag } from "next/cache";

export default async function createEmployee(formdata: FormData) {
    const cleanData = new FormData();
    for(const [key, value] of formdata.entries()){
        if(!key.startsWith("$")){
            cleanData.append(key, value);
        }
    } 
    const response = await fetch(`${API_URL}/employees`, {
        method: 'POST',
       headers:{
        ...authHeaders()
       },
        body: cleanData
    });
    if (response.status === 201) revalidateTag('dashboard:employees');
    return 
}