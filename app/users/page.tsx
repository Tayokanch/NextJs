import React, { Suspense } from "react";
import UserTable from "./userTable";
import Loading from "@/loading";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <section className="flex flex-col">
      <h1>User</h1>
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </section>
  );
};

export default UserPage;
