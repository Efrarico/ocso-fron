import { Manager } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function ManagerCard({ manager }: { manager: Manager }) {
  return (
    <Card className="mx-20 py-2 text-center w-full">
      <CardHeader>
        <p className="w-full">
          <b className="text-4xl">{manager.managerFullName}</b>{" "}
        </p>
      </CardHeader>
      <Divider />
      <CardBody className=" items-center">
        <div>
          <p className="w-full">
            Email: <b>{manager.managerEmail}</b>{" "}
          </p>
          <p className="w-full">
            Telefono: <b>{manager.managerPhoneNumber}</b>
          </p>
          <p className="w-full">
            Salario: <b>{manager.managerSalary}</b>
          </p>
          {manager.location ? (
            <>
              <p className="w-full">
                Tienda:{" "}
                <Link
                  href={{
                    pathname: `/dashboard`,
                    query:{
                        store: manager?.location?.locationId
                    }
                  }}
                >
                  <b className="underline">{manager.location?.locationName}</b>
                </Link>
              </p>
            </>
          ) : (
            <p>No tiene tienda</p>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
