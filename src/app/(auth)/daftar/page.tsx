"use client";
import Button from "@/components/button";
import InputText from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Daftar() {
  const router = useRouter();
  useEffect(() => {
    const link = "/api/csrf";
    async function Tangkap() {
      try {
        const res = await fetch(link);
      } catch (err) {
        console.log({ "error csrf": err });
      }
    }
    Tangkap();
  }, []);

  const [values, setValues] = useState({
    nama: "Muhammad Hanif Arrouf",
    email: "hanif@gmail.com",
    sandi: "12345678",
  });

  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    sandi: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setValues((val: any) => ({ ...val, [name]: value }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const link = "/api/daftar";
    try {
      setErrors({ nama: "", email: "", sandi: "" });
      const res = await fetch(link, {
        method: "GET",
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.message == "success") {
        router.push("/login");
      } else if ((data.message = "validation error")) {
        const validation = data.validation;
        validation.name &&
          setErrors((val: any) => ({ ...val, email: `*${validation.name}` }));
        validation.email &&
          setErrors((val: any) => ({ ...val, email: `*${validation.email}` }));
        validation.password &&
          setErrors((val: any) => ({
            ...val,
            sandi: `*${validation.password}`,
          }));
      }
    } catch (err) {
      console.log({ error: err });
    }
  }

  return (
    <main className="p-4 pt-20 bg-white h-screen">
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-slate-800">
          Buat akun Pasar dengan mudah.
        </p>
        <p className="text-slate-500">
          Ayoo, buat akun pasar dan jelajahi produk-produknya.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2">
        <InputText
          id="nama"
          label="Nama Lengkap"
          type="text"
          value={values.nama}
          error={errors.nama}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap"
          onFocusColor="ring-lime-600"
          custom="py-3"
        />
        <InputText
          id="email"
          label="Email"
          type="text"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          placeholder="Masukkan email"
          onFocusColor="ring-lime-600"
          custom="py-3"
        />
        <InputText
          id="sandi"
          label="Kata Sandi"
          type="password"
          placeholder="Masukkan kata sandi"
          onFocusColor="ring-lime-600"
          custom="py-3"
        />
        <div className="mt-3 flex gap-2">
          <input type="checkbox" id="kebijakan" />
          <p>
            Saya setuju dengan{" "}
            <span className="text-lime-700">
              <Link href="#">Kebijakan </Link>
            </span>
            dan{" "}
            <span className="text-lime-700">
              <Link href="#">aturan privasi</Link>
            </span>
          </p>
        </div>
        <Button
          roundedFull
          color="bg-lime-600"
          custom="mt-3 py-3 justify-center"
        >
          Daftar
        </Button>
      </form>
      <div className="mt-5 text-center">
        <p>
          Sudah mempunyai akun?{" "}
          <span className="text-lime-700">
            <Link href="login"> Login di sini</Link>
          </span>
        </p>
      </div>
    </main>
  );
}
