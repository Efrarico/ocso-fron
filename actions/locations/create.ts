"use server";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";

export async function createLocation(fromData: FormData){
    const token = cookies().get(TOKEN_NAME)?.value;	
    if (!token) return null;
    
    let location: any = {};
    let locationLatLng = [0,0] 
    for (const key of fromData.keys()){
        const value = fromData.get(key);
        if (value) {
            if (key === "locationLat") {
                locationLatLng[0] = +value;
            }else if(key === "locationLng"){
                locationLatLng[1] = +value;
            }else{
                location[key] = value;
            }
        }
    }
    location.locationLatLng = locationLatLng;
    axios.post(`${API_URL}/locations`,{
        ...location
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
}