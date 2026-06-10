"use client";

import { track } from "@/lib/track";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  params?: Record<string, string | number | undefined>;
};

/** Enlace <a> que dispara un evento de GTM al hacer clic (para conversiones de Ads/GA4/Meta). */
export default function TrackLink({ event, params, children, ...rest }: Props) {
  return (
    <a {...rest} onClick={(e) => { track(event, params); rest.onClick?.(e); }}>
      {children}
    </a>
  );
}
