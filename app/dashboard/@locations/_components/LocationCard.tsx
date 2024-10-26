import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
import { authHeaders } from '@/helpers/authHeaders';

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const response = await fetch(`${API_URL}/locations/${store}`, {
    method: "GET",
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashboard:locations", `dashboard:locations:${store}`],
    },
  });
  const data: Location = await response.json();
  return (
    <Card>
      <CardHeader>
        <b className="w-full">Tienda: {data.locationName}</b>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="w-full">
          Manager: 
          <Link href={{ pathname: `/dashboard/employees` }}>
            <b>{data.manager?.managerFullName}</b>
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
