import { NextRequest, NextResponse } from "next/server";
import { productSchema } from "../users/schema";

const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = productSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json(body, { status: 201 });
};

export { POST };
