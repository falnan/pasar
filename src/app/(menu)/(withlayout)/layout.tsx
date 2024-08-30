"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faList,
  faUser as faUser2,
  faThumbsUp as faThumbsUp2,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function LayoutMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    {
      nama: "Rekomendasi",
      icon: faThumbsUp,
      icon2: faThumbsUp2,
      link: "/",
    },
    {
      nama: "Kategori",
      icon: faList,
      icon2: faTableList,
      link: "/kategori",
    },
    {
      nama: "Keranjang",
      icon: faCartPlus,
      icon2: faCartPlus,
      link: "/keranjang",
    },
    {
      nama: "Akun",
      icon: faUser,
      icon2: faUser2,
      link: "/akun",
    },
  ];
  const pathname = usePathname();

  return (
    <div>
      <section className="fixed bg-white bottom-0 border-t h-16 w-full max-w-md grid grid-cols-4">
        {menu.map((item) => (
          <Link
            key={item.nama}
            href={item.link}
            className={`${
              pathname == item.link && "text-lime-600"
            } h-full flex flex-col justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={pathname == item.link ? item.icon2 : item.icon}
            />
            <p className="text-sm">{item.nama}</p>
          </Link>
        ))}
      </section>
      {children}
    </div>
  );
}
