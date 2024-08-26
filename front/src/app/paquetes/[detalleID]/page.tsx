"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PaqueteDetalle from "@/components/PaqueteDetalle/PaqueteDetalle";
import { fetchProductById } from "@/lib/fetchProduct";
import { IProduct } from "@/types";

const Detail = ({ params }: { params: { detalleID: string } }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(params.detalleID);
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Product not found");
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.detalleID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return <PaqueteDetalle {...product} />;
};

export default Detail;
