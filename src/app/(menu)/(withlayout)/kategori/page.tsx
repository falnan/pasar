"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Topbar from "@/components/topbar";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Kategori() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    router.push(`product/?${search}`);
  }
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

  return (
    <main>
      {/*topbar */}
      <Topbar judul="Kategori" link="#" />

      {/* kategori */}
      <div className="p-2">
        <div className="grid grid-cols-4 gap-2">
          {kategori.map((item: any, idx) => (
            <Link key={idx} href={item.link} className="bg-white shadow p-1">
              <div className="flex flex-col items-center ">
                <Image
                  className="w-full"
                  width={70}
                  height={70}
                  src={item.img}
                  alt={item.name}
                />
                <p className="mt-1 text-center text-slate-900 leading-4 text-sm">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
