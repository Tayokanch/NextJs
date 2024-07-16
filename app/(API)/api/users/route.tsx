import { NextRequest, NextResponse } from "next/server";
import { UsernameSchema } from "./schema";
import { Prisma } from "@prisma/client";
import prisma from "@/prisma/client";

interface Props {
  params: { id: number };
}
const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
};

const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = UsernameSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const findUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (findUser) {
    return NextResponse.json(
      { message: "User with an email already exists" },
      { status: 400 }
    );
  }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
};

export { GET, POST };
