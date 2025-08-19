import Footer from "../component/common/Footer";
import Header from "../component/common/Header";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
