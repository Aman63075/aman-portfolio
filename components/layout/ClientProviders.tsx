"use client";

import { useEffect, useState } from "react";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Loader from "@/components/ui/Loader";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <CustomCursor />
      <ScrollProgress />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}