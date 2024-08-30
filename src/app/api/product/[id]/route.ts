import { productValidation } from "@/lib/validation";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    const data = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    const body = await request.json();
    const validated = productValidation.parse(body);
    const data = await prisma.product.update({
      where: {
        id: id,
      },
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
    return NextResponse.json({ message: "error", error: error });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    const data = await prisma.product.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "success", data: data });
  } catch (error: any) {
    return NextResponse.json({ message: "error", error: error });
  }
}
