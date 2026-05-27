"use client";

import { useEffect, useRef, useState } from "react";
import { getGoogleMapEmbedUrl, getGoogleMapsPlaceUrl } from "@/lib/maps";

export default function GoogleMapEmbed({
  title,
  language,
  className,
  iframeClassName,
  pinLinkClassName,
}) {
  const mapRef = useRef(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const timeoutId = window.setTimeout(() => setShouldLoadMap(true), 0);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px" },
    );

    observer.observe(mapElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className={className}>
      {shouldLoadMap ? (
        <iframe
          title={title}
          src={getGoogleMapEmbedUrl(language)}
          className={iframeClassName}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : null}
      <a
        href={getGoogleMapsPlaceUrl(language)}
        className={pinLinkClassName}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Cycladic Lodge Sifnos in Google Maps"
      />
    </div>
  );
}
