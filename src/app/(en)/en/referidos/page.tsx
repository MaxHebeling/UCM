import type { Metadata } from "next";
import Referidos from "@/screens/Referidos";

export const metadata: Metadata = {
  title: "UCM Referral Rewards Program",
  description: "Invite your friends to join UCM and earn rewards: free monthly tuition, graduation discounts or direct cash rewards. Take part and grow with the #UCMFamily.",
  alternates: { canonical: "/en/referidos", languages: { es: "/referidos", en: "/en/referidos" } },
};

export default function Page() {
  return <Referidos lang="en" />;
}
