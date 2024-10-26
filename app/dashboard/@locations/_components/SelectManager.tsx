"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Location, Manager } from "@/entities";

interface SelectManagerProps{
  managers : Manager[];
  locations : Location[];
  defaultManager?: string;
}

export default function SelectManager({ managers, locations, defaultManager = undefined }: SelectManagerProps) {
  const disabledKeys = locations.map((location: Location) => {
    if(location.manager?.managerId !== defaultManager) return location.manager?.managerId;
  }).filter((managerId) => managerId !== undefined);

  return (
    <Select defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : [] } name="manager" label="Select Manager" disabledKeys={disabledKeys}>
      {managers.map((manager: Manager) => (
        <SelectItem key={manager.managerId} value={manager.managerId}>
          {manager.managerFullName}
        </SelectItem>
      ))}
    </Select>
  );
}
