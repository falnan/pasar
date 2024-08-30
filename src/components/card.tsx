import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ICard {
  img: string;
  slug: string;
  judul: string;
  harga_asli: number;
  harga_diskon: number;
  satuan: string;
}

export default function Card({
  slug,
  img,
  judul,
  harga_asli,
  harga_diskon,
  satuan,
}: ICard) {
  return (
    <div className="w-full h-full">
      <Link href={`/produk/${slug}`}>
        <div className="flex justify-center">
          <Image
            className="min-h-44 object-cover"
            width={300}
            height={300}
            loading="lazy"
            src={img}
            alt=""
          />
        </div>
        <div className="p-2">
          <h3 className="text-sm text-slate-900">{judul}</h3>
          <div className="flex justify-between">
            <p className="font-bold text-lime-600 overflow-hidden">
              <span className="text-xs">Rp</span>
              {harga_diskon.toLocaleString("id")}
              <span className="text-xs">/{satuan}</span>
              <span className="ml-1 text-xs text-slate-400 line-through">
                Rp{harga_asli.toLocaleString("id")}/kg
              </span>
            </p>
            <p className="px-1 bg-green-200 text-green-700 text-xs self-center">
              -{(((harga_asli - harga_diskon) / harga_asli) * 100).toFixed(0)}%
            </p>
          </div>
          <div className="">
            {/* <Rating
            initialValue={4}
            size={18}
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
            readonly
          /> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export function CardTitle({ judul }: { judul: string }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-lime-600">{judul}</h2>
      <Link href="/produk" className="flex items-center text-lime-600">
        <p className="text-sm">Lihat semua</p>
        <FontAwesomeIcon className="mt-1 text-xs" icon={faChevronRight} />
      </Link>
    </div>
  );
}
