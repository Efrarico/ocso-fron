import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) {
    if (searchParams.store) return null;
    const responseManagers = await fetch(`${API_URL}/managers`,{
        method: "GET",
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dashboard:managers"]
        }
    })
    const dataManager: Manager[] = await responseManagers.json();
    const responseLocations = await fetch(`${API_URL}/locations`,{
        method: "GET",
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dashboard:locations"]
        }
    })
    const dataLocations: Location[] = await responseLocations.json();
    return(
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input required={true} label="Nombre" placeholder="oxxo Jurica" name="locationName"/>
            <Input required={true} label="Dirección" placeholder="Av Tlacote S/N" name="locationAddress"/>
            <Input required={true} label="Latitud" placeholder="-120" name="locationLat"/>
            <Input required={true} label="Longitud" placeholder="20" name="locationLng"/>
            <SelectManager managers={dataManager} locations={dataLocations}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}