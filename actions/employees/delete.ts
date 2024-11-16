"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "../../helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteEmployee(
  employeeId: string,
  formdata: FormData
) {
  formdata.delete("$ACTION_REF_0");
  formdata.delete("$ACTION_0:1");
  formdata.delete("$ACTION_0:0");
  const response = await fetch(`${API_URL}/employees/${employeeId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
    },
    body: formdata,
  });
  if (response.status === 200) {
    revalidateTag("dashboard:employees");
    redirect("/dashboard/employees");
  }
  return;
}
