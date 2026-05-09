import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "./scrollToTop";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
