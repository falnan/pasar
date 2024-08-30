import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.user.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.wishlist.deleteMany({});
    await prisma.cart.deleteMany({});

    const user = await prisma.user.createMany({
      data: [
        {
          username: "hanif",
          name: "Muhammad Hanif Arrouf",
          email: "hanif@gmail.com",
        },
        {
          username: "tuti",
          name: "Tuti Ariani",
          email: "tuti@gmail.com",
        },
      ],
    });

    const product = await prisma.product.createMany({
      data: [
        {
          title: "alpukat",
          slug: "alpukat",
          category: "buah",
          description: "tak banyak deskripsi",
          image: "/img/buah/alpukat.JPG",
          normalPrice: 12000,
          dealPrice: 10000,
          unit: "buah",
          stock: 50,
        },
        {
          title: "Pisang Barangan",
          slug: "pisang-barangan",
          category: "buah",
          description: "bebas",
          image: "/img/buah/pisang-barangan.JPG",
          normalPrice: 19000,
          dealPrice: 18000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Buah Naga",
          slug: "buah-naga",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/buah-naga.JPG",
          normalPrice: 32000,
          dealPrice: 30000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Pepaya",
          slug: "pepaya",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/pepaya.JPG",
          normalPrice: 13000,
          dealPrice: 12000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Semangka",
          slug: "semangka",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/semangka.JPG",
          normalPrice: 13000,
          dealPrice: 12000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Apel Merah Biasa",
          slug: "apel-merah-biasa",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/apel-merah.JPG",
          normalPrice: 46000,
          dealPrice: 45000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Alpukat",
          slug: "alpukat",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/alpukat.JPG",
          normalPrice: 28000,
          dealPrice: 25000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Kelengkeng (Mata Kucing)",
          slug: "kelengkeng-mata-kucing",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/buah-kelengkeng.JPG",
          normalPrice: 62000,
          dealPrice: 60000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Salak",
          slug: "salak",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/salak.JPG",
          normalPrice: 26000,
          dealPrice: 25000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Pisang Kepok",
          slug: "pisang-kepok",
          category: "buah",
          description: "ape ape aje",
          image: "/img/buah/pisang-kepok.JPG",
          normalPrice: 16000,
          dealPrice: 15000,
          unit: "kg",
          stock: 10,
        },
        {
          title: "Jeruk Kasturi",
          slug: "jeruk-kasturi",
          category: "buah",
          description: "ape ape aje",
          image: "/img/bumbu-dan-rempah/jeruk-kasturi.JPG",
          normalPrice: 16000,
          dealPrice: 15000,
          unit: "kg",
          stock: 10,
        },
      ],
    });

    const wishlist = await prisma.wishlist.createMany({
      data: [
        {
          userId: "hanif",
          productId: 1,
          quantity: 2,
          note: "aman dah",
        },
        {
          userId: "hanif",
          productId: 3,
          quantity: 2,
          note: "aman dah",
        },
        {
          userId: "tuti",
          productId: 1,
          quantity: 2,
          note: "aman dah",
        },
      ],
    });

    const cart = await prisma.cart.createMany({
      data: [
        {
          userId: "hanif",
          totalPrice: 28000,
        },
      ],
    });

    return NextResponse.json({
      user: user,
      product: product,
      wishlist: wishlist,
      cart: cart,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err });
  }
}
