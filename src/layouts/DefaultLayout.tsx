import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollingDiamond from "../components/ScrollingDiamond/ScrollingDiamond";
import FloatLinks from "../components/FloatLinks/FloatLinks";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="default-portfolio">
      <ScrollingDiamond />
      <FloatLinks />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
