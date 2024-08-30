"use client";
import Button from "@/components/button";
import Topbar from "@/components/topbar";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export function KeranjangBerisi({ data }: any) {
  return (
    <main>
      <Topbar judul="Keranjang" link="#" />

      <section className="p-2 flex flex-col gap-2">
        {data &&
          data.map((item: any) => (
            <div
              key={item.id}
              className="flex gap-2 bg-white rounded-md shadow  p-2"
            >
              <input type="checkbox" />
              <Image
                src={item.productRelation.image}
                width={90}
                height={90}
                alt="buah"
                className="rounded-md"
              />
              <div className="w-full flex justify-center flex-col overflow-hidden">
                <p className="text-nowrap overflow-hidden text-ellipsis">
                  {item.productRelation.title}
                </p>
                <p className="text-lime-600 text-sm">
                  Rp
                  <span className="text-base font-bold">
                    {item.productRelation.dealPrice}
                  </span>
                </p>
                <div className="mt-1 flex justify-between items-center w-full">
                  <div className="flex border border-slate-300 rounded-md text-sm">
                    <p className="px-2">{item.quantity}</p>
                    <p className="bg-slate-200 px-2">
                      {item.productRelation.unit}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="bg-lime-500 text-white rounded-md px-1 text-sm">
                      Ubah
                    </p>
                    <p className="bg-red-400 text-white rounded-md px-1 text-sm">
                      Hapus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>

      <div className="fixed bg-white bottom-0 border-t h-16 w-full max-w-md grid grid-cols-4">
        <Link href="/" className="h-full absolute w-full flex justify-end">
          <div className="flex flex-col items-end justify-center px-2">
            <p>Total Pembayaran</p>
            <p className="text-lime-600 ">
              Rp.{(70000).toLocaleString("id-ID")}
            </p>
          </div>
          <div className="bg-lime-500 flex items-center text-white px-3 font-bold">
            Checkout (2)
          </div>
        </Link>
      </div>
    </main>
  );
}

export function KeranjangKosong() {
  return (
    <main>
      <div className="p-4 -mt-8 h-screen flex flex-col justify-center items-center gap-16">
        <Image
          alt="keranjang"
          src="/img/produkkosong.svg"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col place-items-center text-center gap-3">
          <p className="text-xl font-bold">Yah! Keranjang kosong</p>
          <p className="text-slate-400 w-[80%]">
            Kamu terlihat masih belum memesan apapun, yuk belanja
          </p>

          <Button
            roundedFull
            color="bg-lime-600"
            custom="mt-8 py-3 justify-center"
          >
            Cari Produk
          </Button>
        </div>
      </div>
    </main>
  );
}

export default function Keranjang() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/keranjang/api", fetcher);
  // const data = "";
  if (data) {
    return <KeranjangBerisi data={data.data} />;
  } else {
    return <KeranjangKosong />;
  }
}
