import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ContactSection from "@/components/ContactSection/ContactSection";
import DocumentSection from "@/components/DocumentSection/DocumentSection";
import InnerFooter from "@/components/InnerFooter/InnerFooter";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <ScrollTop />
      <Header variant="inner" activeLabel="Contact" />
      <main>
        <Breadcrumb title="Contact Us" />
        <ContactSection />
        <DocumentSection />
      </main>
      <InnerFooter />
    </>
  );
}
