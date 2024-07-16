import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
const GET = async (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "Tayo" },
    { id: 2, name: "Tope" },
  ]);
};

const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json( validation.error.errors, { status: 400 });
  }

  return NextResponse.json(
    { id: 1, name: body.name, email: body.email },
    { status: 201 }
  );
};

export { GET, POST };
