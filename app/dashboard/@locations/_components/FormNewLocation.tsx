import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FromNewLocation({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) {
    if (searchParams.store) return null;
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers: {
            ...authHeaders()
        }
    })
    const responseLocations = await axios.get(`${API_URL}/locations`,{
        headers: {
            ...authHeaders()
        }
    })

    return(
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="oxxo Jurica" name="locationName"/>
            <Input label="Dirección" placeholder="Av Tlacote S/N" name="locationAddress"/>
            <Input label="Latitud" placeholder="-120" name="locationLat"/>
            <Input label="Longitud" placeholder="20" name="locationLng"/>
            <SelectManager managers={responseManagers.data} locations={responseLocations.data}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}