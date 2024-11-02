import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider | any }) {
  return (
    <Card className="w-full min-w-[350px] max-w-[350px]">
      <CardHeader><b>{provider.providerName}</b></CardHeader>
      <Divider />
      <CardBody>
        <p>Email:</p>
        <b>{provider.providerEmail}</b>
        <p>Teléfono:</p>
        <b>{provider.providerPhoneNumber}</b>
        {provider?.products?.length !== 0 ? (
          <p>
            Tiene: <b>{provider.products.length} </b> productos{provider?.products?.length > 1 ? "s" : ""}
          </p>
        ) : (
          <p>No tiene productos</p>
        )}
      </CardBody>
    </Card>
  );
}
