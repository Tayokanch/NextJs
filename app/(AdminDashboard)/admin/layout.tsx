import React, { ReactNode } from "react";
import SideBar from "./sideBar";
import Footer from "./footer";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <section className="w-full h-screen bg-blue-300 grid grid-cols-[200px_1fr]">
      <SideBar />
      <div>{children}</div>
    </section>
  );
};

export default AdminLayout;
