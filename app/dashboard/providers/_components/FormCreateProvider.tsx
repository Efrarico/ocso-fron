import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";


export default async function FormCreateProvider() {
  return (
    <form action={createProvider} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
      <h1 className="text-2xl text-white font-semibold text-center">Añadir Provedor</h1>
      <Input
        required={true}
        isRequired
        label="Nombre del Proveedor"
        placeholder="Pepsico"
        name="providerName"
      />
      <Input
        required={true}
        isRequired
        label="Correo Electrónico"
        placeholder="pepsico@company.com"
        name="providerEmail"
      />
      <Input
        required={true}
        isRequired
        label="Número de Teléfono"
        placeholder="5549465234"
        name="providerPhoneNumber"
      />
      <Button color="primary" type="submit">
        Añadir Proveedor
      </Button>
    </form>
  );
}
