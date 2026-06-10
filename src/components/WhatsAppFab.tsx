import { inst } from "@/data/site";
import TrackLink from "@/components/TrackLink";

export default function WhatsAppFab() {
  return (
    <TrackLink
      event="whatsapp_click"
      params={{ ubicacion: "fab_desktop" }}
      href={inst.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden sm:flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-glow transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current"><path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2.1c1.8 1 3.9 1.5 6 1.5 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.7c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.3-.4c-1-1.6-1.5-3.5-1.5-5.5C5.7 9.8 10.3 5.3 16 5.3S26.3 9.8 26.3 15.5 21.7 25.7 16 25.7zm5.8-7.5c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/></svg>
      WhatsApp
    </TrackLink>
  );
}
