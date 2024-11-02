"use client";
import { Product } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { use, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { tr } from "framer-motion/client";

export default function FilteredCards({ products }: { products: Product[] }) {
  const [filtered, setFiltered] = useState<string>("");
  const [productsList, setProductsList] = useState<Product[]>(products);
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (product.productName.toLowerCase().includes(filtered.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setProductsList(filteredProducts);
  }, [filtered]);
  return (
    <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-400 border-r-2 pt-10 px-10">
      <Input
        onChange={(e) => {
          setFiltered(e.target.value);
        }}
        label="Nombre producto"
      />
        {productsList.map((product) => {
        return (
          <Link
          className="hover:scale-110 transition-transform"
            href={{ pathname: `/dashboard/products/${product.productId}` }}
            key={product.productId}
          >
            <ProductCard product={product} />
          </Link>
        );
      })}
    </div>
  );
}
