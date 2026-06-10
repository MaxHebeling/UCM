import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import StickyCta from "@/components/StickyCta";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
      <StickyCta />
    </SmoothScroll>
  );
}
