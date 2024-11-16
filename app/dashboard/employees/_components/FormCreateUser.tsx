"use client";
import registerEmployee from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormCreateUserEmployee({
  employee,
}: {
  employee: Employee;
}) {
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const { id } = employee;
  const registerEmployeeById = registerEmployee.bind(null, id);
  return (
    <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
      <h1 className="text-white text-xl font-bold text-center">
        Crear Usuario
      </h1>
      <Input name="userEmail" type="email" label="Correo de cuenta" />
      <Input
        value={password}
        name="userPassword"
        type={visible ? "text" : "password"}
        label="Contraseña"
        endContent={
          <button type="button" onMouseUp={()=> setVisible(false)} onMouseDown={() => setVisible(true)}>
            <LuEye size="30"/>
          </button>
        }
      />
      <Button
        color="danger"
        onPress={() => {
          setPassword(
            generate({
              length: 10,
            })
          );
        }}
      >
        Generar contraseña
      </Button>
      <Button type="submit" color="primary">Crear Usuario</Button>
    </form>
  );
}
