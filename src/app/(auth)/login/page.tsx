"use client";
import Button from "@/components/button";
import InputText from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
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
    email: "hanif@gmail.com",
    sandi: "12345678",
  });

  const [errors, setErrors] = useState({
    email: "",
    sandi: "",
  });

  const [valid, setValid] = useState(false);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setValues((val: any) => ({ ...val, [name]: value }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const link = "/api/login";
    try {
      setErrors({ email: "", sandi: "" });
      const res = await fetch(link, {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.message == "success") {
        router.push("/");
      } else if (data.message == "failed") {
        setValid(true);
        setTimeout(() => {
          setValid(false);
        }, 3000);
      } else if ((data.message = "validation error")) {
        const validation = data.validation;
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
      {valid && (
        <div className="absolute top-0 left-0 w-full py-1 text-center text-white bg-red-500">
          Email atau Sandi salah
        </div>
      )}
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-slate-800">
          Login ke Akun Pasarmu.
        </p>
        <p className="text-slate-500">Ayoo, login dan beli produk favoritmu.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2">
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
          value={values.sandi}
          error={errors.sandi}
          onChange={handleChange}
          onFocusColor="ring-lime-600"
          placeholder="Masukkan kata sandi"
          custom="py-3"
        />
        <div className="mt-3 flex justify-end text-lime-700">
          <Link href="#">Lupa Sandi?</Link>
        </div>
        <Button
          roundedFull
          color="bg-lime-600"
          custom="mt-3 py-3 justify-center"
        >
          Login
        </Button>
      </form>
      <div className="mt-5 text-center">
        <p>
          Belum mempunyai akun?{" "}
          <span className="text-lime-700">
            <Link href="daftar"> Daftar di sini</Link>
          </span>
        </p>
      </div>
    </main>
  );
}
