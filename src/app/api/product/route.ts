import { productValidation } from "@/lib/validation";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.product.findMany();

    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = productValidation.parse(body);
    const data = await prisma.product.create({
      data: {
        title: validated.title,
        slug: validated.slug,
        category: validated.category,
        description: validated.description,
        image: validated.image,
        normalPrice: validated.normalPrice,
        dealPrice: validated.dealPrice,
        unit: validated.unit,
        stock: validated.stock,
      },
    });
    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error.issues });
  }
}
