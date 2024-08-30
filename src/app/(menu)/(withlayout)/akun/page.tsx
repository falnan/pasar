import {
  faAddressBook,
  faCreditCard,
  faTrashCan,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronRight,
  faHeadset,
  faKey,
  faLocation,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Akun() {
  const menu = [
    {
      nama: "Profil",
      anak: [
        {
          nama: "Biodata",
          link: "/biodata",
          icon: faUser,
        },
        {
          nama: "Pesanan",
          link: "#",
          icon: faAddressBook,
        },
        {
          nama: "Alamat pengiriman",
          link: "#",
          icon: faLocation,
        },
        {
          nama: "Metode pembayaran",
          link: "#",
          icon: faCreditCard,
        },
        {
          nama: "Ubah kata sandi",
          link: "#",
          icon: faKey,
        },
      ],
    },
    {
      nama: "Support",
      anak: [
        {
          nama: "Dukungan bantuan",
          link: "#",
          icon: faHeadset,
        },
        {
          nama: "Hapus akun",
          link: "#",
          icon: faTrashCan,
        },
        {
          nama: "Logout",
          link: "#",
          icon: faSignOut,
        },
      ],
    },
  ];
  return (
    <main>
      <div className="h-60 flex flex-col gap-4 justify-center items-center bg-slate-100">
        <Image
          alt=""
          src="/img/avatar.svg"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="text-center">
          <p className=" font-bold text-slate-900">Fadilah Kurniawan</p>
          <p className=" text-slate-500 lowercase ">Fadhilkn08@gmail.com</p>
        </div>
      </div>
      {/* profil */}

      <div className="h-screen p-8 flex flex-col gap-8 bg-white">
        {menu.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <p className="text-slate-600 text-sm">{item.nama}</p>
            <div className="flex flex-col gap-6">
              {item.anak.map((a, idx) => (
                <Link
                  key={idx}
                  href={a.link}
                  className="flex text-slate-900 gap-2 justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <FontAwesomeIcon
                      className="bg-slate-200 p-1 rounded-md"
                      icon={a.icon}
                    />
                    <p>{a.nama}</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
