"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Remove and re-add class to retrigger animation
    el.classList.remove("page-transition-animate");
    void el.offsetHeight; // force reflow
    el.classList.add("page-transition-animate");
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition-animate">
      {children}
    </div>
  );
}