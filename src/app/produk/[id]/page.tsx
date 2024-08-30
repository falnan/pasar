"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

export default function ProdukSlug() {
  const params = useParams();
  const [search, setSearch] = useState("");
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/product/${params.id}}`,
    fetcher
  );
  console.log(data);
  return (
    <main>
      <div>ini slug id</div>
      {data && (
        <div>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.category}</p>
          <p>{data.image}</p>
          <p>{data.description}</p>
          <p>{data.quantity}</p>
        </div>
      )}
    </main>
  );
}
