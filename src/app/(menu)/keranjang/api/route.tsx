import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.wishlist.findMany({
      where: {
        userId: "hanif",
      },
      include: {
        productRelation: true,
      },
    });

    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error });
  }
}
