import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}
const GET = async (request: NextRequest, { params: { id } }: Props) => {
  const foundUser = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ user: foundUser }, { status: 200 });
};

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const { name, email } = await request.json();
  if (!name || !email) {
    return NextResponse.json(
      { error: " all are fields are required" },
      { status: 400 }
    );
  }

  const findUser = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!findUser) {
    return NextResponse.json({
      message: `user with the given id: ${id} not found`,
    });
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: findUser.id,
    },
    data: {
      name: name,
      email: email,
    },
  });
  return NextResponse.json({ message: updatedUser }, { status: 201 });
};

const DELETE = async (request: NextRequest, { params: { id } }: Props) => {
  const CheckedUser = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!CheckedUser) {
    return NextResponse.json({
      message: `user with the give id: ${id} not found`,
    });
  }

  await prisma.user.delete({
    where: {
      id: CheckedUser.id,
    },
  });
  return NextResponse.json(
    { message: "Usee has been sucessfuly deleted" },
    { status: 200 }
  );
};

export { GET, PUT, DELETE };
