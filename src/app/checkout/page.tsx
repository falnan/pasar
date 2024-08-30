"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCaretRight,
  faLocation,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Topbar from "@/components/topbar";
import useSWR from "swr";
import Select from "@/components/select";
import Link from "next/link";
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons";

export default function Checkout() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/checkout/api", fetcher);

  const barang = [
    {
      id: "hehe",
      quantity: 3,
      productRelation: {
        image: "/img/buah/alpukat.JPG",
        title: "Buah Alpukat",
        dealPrice: 24000,
        unit: "buah",
      },
    },
    {
      id: "hehe",
      quantity: 3,
      productRelation: {
        image: "/img/buah/anggur.JPG",
        title: "Anggur Sedap",
        dealPrice: 24000,
        unit: "buah",
      },
    },
  ];

  const selectTime = [
    {
      value: "",
      name: "--Pilih--",
    },
    {
      value: "",
      name: "07.30 WIB",
    },
    {
      value: "",
      name: "16.30 WIB",
    },
  ];
  const selectPayment = [
    {
      value: "",
      name: "--Pilih--",
    },
    {
      value: "cod",
      name: "Cash on Delivery (COD)",
    },
    {
      value: "bsi",
      name: "Bank Syariah Indonesia (BSI)",
    },
    {
      value: "bri",
      name: "Bank Central Asia (BCA)",
    },
    {
      value: "bsi",
      name: "Bank Syariah Indonesia (BSI)",
    },
  ];
  return (
    <main>
      <Topbar judul="Checkout" link="#" />
      <div className="mt-2 bg-white p-4 overflow-hidden shadow">
        <div className="flex justify-between">
          <p className="font-bold">Alamat Pengiriman</p>
          {/* <FontAwesomeIcon icon={faArrowRight} className="text-green-500" /> */}
          <p className="font-bold">Ubah</p>
        </div>
        <div className="leading-5">
          <p>Muhammad Hanif Arrouf | +6282285567722</p>
          <p>Jl. Awang Mahmuda, RT004/RW008, Desa Sungai Alam, Bengkalis</p>
        </div>
        <div className="flex mt-3">
          <Image
            className="-ml-8"
            src="/img/amplop.svg"
            width={200}
            height={10}
            alt="ya"
          />
          <Image
            className="-ml-3"
            src="/img/amplop.svg"
            width={200}
            height={10}
            alt="ya"
          />
          <Image
            className="-ml-3"
            src="/img/amplop.svg"
            width={200}
            height={10}
            alt="ya"
          />
        </div>
      </div>
      <div className="mt-1 p-2 flex flex-col gap-4 bg-white">
        <div className="space-y-1">
          <p className="font-bold">Pilih Waktu Pengiriman</p>
          <Select id="time" data={selectTime} />
        </div>
        <div className="mt-2 p-2 flex flex-col gap-2 rounded-md bg-gradient-to-tr from-green-200 to-lime-200">
          <p className="bg-green-600 text-sm w-fit px-2 rounded-full text-white">
            Rincian Pesanan
          </p>
          <div className="flex gap-2">
            {barang.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Image
                  width={20}
                  height={20}
                  src={item.productRelation.image}
                  alt=""
                  className="size-20 rounded-md"
                />

                <p className="text-sm font-bold text-orange-500">
                  <span className="font-normal text-xs">Rp</span>
                  {item.productRelation.dealPrice}
                </p>
                <p className="-mt-1 text-xs italic ">{`${item.quantity} ${item.productRelation.unit}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <p className="font-bold">Metode Pembayaran</p>

          <Select id="payment" data={selectPayment} />
        </div>
        <div className="space-y-1">
          <p className="font-bold">Ringkasan Pembayaran</p>
          <div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rp{(54000).toLocaleString("id-ID")}</p>
            </div>
            <div className="flex justify-between">
              <p>Ongkir</p>
              <p>Rp{(8000).toLocaleString("id-ID")}</p>
            </div>
            <div className="flex justify-between">
              <p>Layanan</p>
              <p>Rp{(2000).toLocaleString("id-ID")}</p>
            </div>
          </div>
          <div className="flex justify-between font-bold">
            <p className="">Total Pembayaran</p>
            <p>Rp{(70000).toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>

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
