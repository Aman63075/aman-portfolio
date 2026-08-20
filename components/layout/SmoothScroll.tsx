"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import Loader from "./Loader";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      {children}
    </>
  );
}