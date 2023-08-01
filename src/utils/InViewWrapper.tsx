"use client";
// component to animate when it is in view

import { motion } from "framer-motion";
import React, { useState } from "react";

interface IView {
  children: React.ReactNode;
  className?: React.ReactNode;
  inView: {};
  notInView: {};

  tranzitie: {};
  delay?: number;
}

const InViewWrapper = ({
  children,
  inView,
  notInView,
  className,
  tranzitie,
  delay
}: IView) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      // animated si not animated le adaugam in props ca
      animate={isInView ? inView : notInView}
      transition={tranzitie}
      onViewportEnter={() => {
        setTimeout(() => {
          setIsInView(true);
        }, delay);
      }}
      onViewportLeave={() => {
        setIsInView(false);
      }}
      id="view-wrapper"
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;
