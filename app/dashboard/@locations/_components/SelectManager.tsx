"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Location, Manager } from "@/entities";

export default function SelectManager({ managers, locations }: { managers: Manager[], locations: Location[] }) {
  const disabledKeys = locations.map((location: Location) => {
    return location.manager?.managerId;
  }).filter((managerId) => managerId !== undefined);

  return (
    <Select name="manager" label="Select Manager" disabledKeys={disabledKeys}>
      {managers.map((manager: Manager) => (
        <SelectItem key={manager.managerId} value={manager.managerId}>
          {manager.managerFullName}
        </SelectItem>
      ))}
    </Select>
  );
}
