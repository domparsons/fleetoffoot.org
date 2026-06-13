import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
