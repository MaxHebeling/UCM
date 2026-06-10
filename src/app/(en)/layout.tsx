import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import StickyCta from "@/components/StickyCta";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div lang="en">
        <CustomCursor />
        <ScrollProgress />
        <Header lang="en" />
        <main>{children}</main>
        <Footer lang="en" />
        <WhatsAppFab />
        <StickyCta lang="en" />
      </div>
    </SmoothScroll>
  );
}
