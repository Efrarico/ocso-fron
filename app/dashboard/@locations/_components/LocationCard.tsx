import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { authHeaders } from '@/helpers/authHeaders';

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      ...authHeaders(),
    },
  });
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
