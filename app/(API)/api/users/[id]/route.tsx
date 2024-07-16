import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}
const GET = async (request: NextRequest, { params: { id } }: Props) => {
  console.log("This is id:", id);
  if (id > 10) {
    return NextResponse.json(
      { error: `The user with the id ${id} is not qualified` },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: 1, name: "Tayo" });
};

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: "Yewande" }, { status: 200 });
};

const DELETE = async (request: NextRequest, { params: { id } }: Props) => {
  if (id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 400 });
  }
  return NextResponse.json(
    { message: "user has been deleted" },
    { status: 200 }
  );
};

export { GET, PUT, DELETE };
