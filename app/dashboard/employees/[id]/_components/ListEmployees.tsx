"use client";
import { Employee, Location } from "@/entities";
import EmployeePhotoCard from "../../_components/EmployeePhotoCard";
import EmployeeCard from "../../_components/EmployeeCard";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function ListEmployees({
  employees,
  locations,
}: {
  employees: Employee[];
  locations: Location[];
}) {    
  const [filter, setFilter] = useState<String>("");
  return (
    <div className="felx flex-row">
      {locations && (
        <Select
          label="Tiendas"
          defaultSelectedKeys={[]}
          className="w-60 pr-20 py-10"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          {locations.map((location) => {
            return (
              <SelectItem key={location.locationId}>
                {location.locationName}
              </SelectItem>
            );
          })}
        </Select>
      )}
      <div className="flex flex-wrap gap-2">
        {employees
          .filter(
            (employee: Employee) =>
              {
                if (filter === "") return true;
                return String(employee.location?.locationId) === filter
            }
          )
          .map((employee: Employee) => {
            if (employee.employeePhoto !== null) {
              return (
                <EmployeePhotoCard key={employee.id} employee={employee} />
              );
            } else {
              return <EmployeeCard key={employee.id} employee={employee} />;
            }
          })}
      </div>
    </div>
  );
}
