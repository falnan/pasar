import { userValidation } from "@/lib/validation";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.user.findMany({
      include: {
        cartRelation: true,
        wishlistRelation: true,
      },
    });

    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = userValidation.parse(body);
    const data = await prisma.user.create({
      data: {
        username: validated.username,
        email: validated.email,
        name: validated.name,
        birthday: validated.birthday,
        gender: validated.gender,
        adress1: validated.adress1,
        adress2: validated.adress2,
        adress3: validated.adress3,
      },
    });
    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error });
  }
}
