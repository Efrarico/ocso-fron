import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "./SelectLocation";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";

export default async function FormUpdateEmployee({employee}:{employee:Employee}){
    const {id} = employee;
    const updateEmployeeById = updateEmployee.bind(null, id);
    const response = await fetch(`${API_URL}/locations`,{
        headers:{
            ...authHeaders()
        }
    })
    const locations = await response.json()
    return(
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName}/>
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName}/>
            <Input label="Correo electrónico" name="employeeEmail" defaultValue={employee.employeeEmail}/>
            <Input label="Num. de teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber}/>
            <Input name="employeePhoto" type="file"  defaultValue={employee.employeePhoto}/>
            <SelectLocation stores={locations} defaultStore={employee.location?.locationId}/>
            <Button type="submit" color="primary">Actualizar datos</Button>
        </form>
    )
}