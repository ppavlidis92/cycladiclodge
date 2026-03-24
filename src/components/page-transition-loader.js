"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/components/loading-screen";

const TRANSITION_DURATION_MS = 500;

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const timeoutRef = useRef(null);
  const frameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return undefined;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, TRANSITION_DURATION_MS);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
      }}
    >
      <LoadingScreen />
    </div>
  );
}
