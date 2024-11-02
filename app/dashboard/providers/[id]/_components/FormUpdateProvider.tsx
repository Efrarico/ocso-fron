import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import DeleteProvider from "./DeleteProvider";
import DeleteButton from "./DeleteButton";

export default function FormUpdateProvider({
  provider,
}: {
  provider: Provider;
}) {
  const { providerId } = provider;
  const updateProviderWhitId = updateProvider.bind(null, providerId);
  return (
    <>
      
      <form
        action={updateProviderWhitId}
        className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 items-center justify-center"
      >
        <Input
          defaultValue={provider.providerName}
          required={true}
          isRequired
          label="Nombre del Proveedor"
          placeholder="Pepsico"
          name="providerName"
        />
        <Input
          defaultValue={provider.providerEmail}
          required={true}
          isRequired
          label="Correo Electrónico"
          placeholder="pepsico@company.com"
          name="providerEmail"
        />
        <Input
          defaultValue={provider.providerPhoneNumber}
          required={true}
          isRequired
          label="Número de Teléfono"
          placeholder="5549465234"
          name="providerPhoneNumber"
        />
        <Button color="primary" type="submit">
          Actualizar Proveedor
        </Button>
        <DeleteProvider>
          <h1 className="text-white text-4xl text-center">¿Estas seguto de eliminar al provedor <b>{provider.providerName}</b>?</h1>
          <DeleteButton providerId={providerId} />
        </DeleteProvider>
      </form>
    </>
  );
}
