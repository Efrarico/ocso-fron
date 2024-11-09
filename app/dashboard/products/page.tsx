import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

const ProductPage = async () => {
  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers = await responseProviders.json();
  return (
    <form
      className="px-10 justify-center pt-10"
      action={createProduct}
    >
      <div className="flex flex-col p-10 gap-6 rounded-md  bg-orange-600">
        <h1 className="text-2xl text-white font-bold">Crear Producto</h1>
        <Input label="Nombre" name="productName" />
        <Input
          label="Precio"
          endContent={<LuDollarSign size="20" />}
          name="price"
        />
        <Input label="Num. de Sellos" name="countSeal" />
        <SelectProvider providers={providers} />
        <Button type="submit" color="primary">
          Crear Producto
        </Button>
      </div>
    </form>
  );
};

export default ProductPage;
