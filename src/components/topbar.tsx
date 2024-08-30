import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ITopbar {
  judul: string;
  link: string;
  custom?: string;
}

export default function Topbar({ judul, link, custom }: ITopbar) {
  return (
    <div
      className={`${custom} bg-white w-full max-w-md h-16 flex items-center justify-between p-4 shadow`}
    >
      <Link href={link}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <p className="text-lg font-bold">{judul}</p>
      <Link href="#">
        <FontAwesomeIcon className="text-lg" icon={faMessage} />
      </Link>
    </div>
  );
}
