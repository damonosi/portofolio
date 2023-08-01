"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,

  mounted,
}: {
  children: ReactNode;

  mounted: boolean;
}) {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
  }, []);
  return mounted && ref.current
    ? createPortal(
        <div className="flex justify-center items-center fixed  left-0 top-0 w-full h-full overflow-auto z-50 bg-[rgba(0,0,0,0.4)]">
          {children}
        </div>,
        ref.current,
      )
    : null;
}
