"use client";

import Card, { CardTitle } from "@/components/card";
import InputText from "@/components/input";
import SignIn from "@/components/sign-in";
import {
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useSWR from "swr";

export default function Home() {
  const kategori = [
    {
      name: "Sayur",
      img: "/img/kategori/sayur.jpg",
      link: "/produk?kategori=sayur",
    },
    {
      name: "Buah",
      img: "/img/kategori/buah.jpg",
      link: "/produk?kategori=buah",
    },
    {
      name: "Protein Hewani",
      img: "/img/kategori/protein-hewani.jpg",
      link: "/produk?kategori=sayur",
    },
    {
      name: "Protein Nabati",
      img: "/img/buah/jagung.JPG",
      link: "/produk?kategori=sayur",
    },
    {
      name: "Sembako",
      img: "/img/kategori/sembako.jpg",
      link: "/produk?kategori=sayur",
    },
    {
      name: "Siap Saji",
      img: "/img/kategori/siap-saji.jpg",
      link: "/produk?kategori=sayur",
    },
    {
      name: "Bumbu dan Rempah",
      img: "/img/kategori/bumbu-dan-rempah.jpg",
      link: "/produk?kategori=sayur",
    },
  ];

  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  const [search, setSearch] = useState("");

  return (
    <main>
      {/* search */}
      <div className="flex items-end gap-2 w-full max-w-md absolute z-50 p-3">
        <InputText
          id="search"
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
      </div>

      {/* caraousel */}
      <Carousel
        dynamicHeight={true}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
      >
        <Image
          width={400}
          height={100}
          src="/img/banner2.png"
          alt="bakolbelanja"
        />
        <Image
          width={400}
          height={100}
          src="/img/banner2.png"
          alt="bakolbelanja"
        />
      </Carousel>

      {/* kategori */}
      <div className="w-full bg-white p-4 pt-8 grid grid-cols-4 justify-items-center gap-y-4">
        {kategori.map((item: any, idx) => (
          <Link key={idx} href={item.link}>
            <div className=" flex flex-col items-center">
              <Image
                className="size-16 border rounded-lg"
                width={60}
                height={60}
                src={item.img}
                alt={item.name}
              />
              <p className="mt-1 text-center leading-4 text-sm">{item.name}</p>
            </div>
          </Link>
        ))}
        <Link href="/produk">
          <div className=" flex flex-col items-center">
            <Image
              width={50}
              height={50}
              className="size-16 border rounded-lg"
              src="/img/kategori/lainnya2.svg"
              alt="dsb"
            />
            <p className="mt-1 text-center leading-4 text-sm">Lainnya</p>
          </div>
        </Link>
      </div>

      {/* produk terlaris  */}
      <div className="mt-2 bg-white p-4">
        <CardTitle judul="Produk Terlaris" />
        <div className="mt-3 flex gap-4 overflow-auto">{/* <Card /> */}</div>
      </div>
    </main>
  );
}
