import updateManager from "@/actions/managers/update";
import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";


export default async function FormUpdateManager({ manager }: { manager: Manager }) {
  const updateManagerWhitId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
        ...authHeaders(),
    }
  })
  const stores = await responseStores.json();
  return (
    <form action={updateManagerWhitId} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
      <h1 className="text-2xl text-white font-semibold text-center">Actualizar Manager</h1>
      <Input
        required={true}
        isRequired
        label="Nombre Completo"
        defaultValue={manager.managerFullName}
        placeholder="Marco Portillo"
        name="managerFullName"
      />
      <Input
        required={true}
        isRequired
        label="Correo Electrónico"
        defaultValue={manager.managerEmail}
        placeholder="manager@ocso.com"
        name="managerEmail"
      />
      <Input
        required={true}
        isRequired
        label="Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="managerSalary"
      />
      <Input
        required={true}
        isRequired
        label="Número de Teléfono"
        defaultValue={manager.managerPhoneNumber}
        placeholder="5549465234"
        name="managerPhoneNumber"
      />
      <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}
