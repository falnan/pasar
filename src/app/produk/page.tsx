"use client";

import InputText from "@/components/input";
import {
  faChevronLeft,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

export default function Produk() {
  const [search, setSearch] = useState("");
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/produk/api", fetcher);
  return (
    <main>
      {/*topbar */}
      <section className="flex items-end gap-2 w-full max-w-md bg-lime-600 p-3">
        <Link className="self-center" href="/">
          <FontAwesomeIcon className="text-white" icon={faChevronLeft} />
        </Link>
        <InputText
          id="cari"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          placeholder="Cari produk"
          endDecoration={
            <FontAwesomeIcon color="gray" icon={faMagnifyingGlass} />
          }
        />
        <Link href="#">
          <FontAwesomeIcon size="2x" color="white" icon={faMessage} />
        </Link>
      </section>

      {/* produk */}
      <div className="p-2 grid grid-cols-2 gap-2 ">
        {data &&
          data.data.map((item: any) => (
            <Link
              key={item.id}
              href={`/produk/${item.id}`}
              className="p-1 flex flex-col bg-white shadow"
            >
              <Image
                src={item.image}
                width={200}
                height={200}
                alt=""
                priority
                className="rounded-lg"
              />

              <div className="flex flex-col">
                <p className="text-sm text-nowrap text-ellipsis overflow-hidden">
                  {item.title}
                </p>
                <p className="text-lime-600 font-bold">
                  <span className="text-xs font-normal">Rp</span>
                  {item.dealPrice}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
