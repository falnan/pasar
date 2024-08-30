import InputText from "@/components/input";
import Topbar from "@/components/topbar";
import Image from "next/image";

export default function Biodata() {
  return (
    <main>
      <Topbar judul="Profil" link="#" />

      <div className="mt-8 flex justify-center">
        <Image
          alt=""
          src="/img/avatar.svg"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <InputText id="name" label="Nama Lengkap" value="" />
        <InputText id="birthday" label="Tanggal Lahir" value="" />
        <InputText id="gender" label="Jenis Kelamin" value="" />
        <InputText id="email" type="email" label="Email" value="" />
        <InputText id="phone" label="Nomor Whatsapp" value="" />
        <InputText id="address1" label="Alamat 1" value="" />
        <InputText id="address1" label="Alamat 2" value="" />
        <InputText id="address1" label="Alamat 3" value="" />
      </div>
    </main>
  );
}
