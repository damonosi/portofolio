"use client";
// component to animate when it is in view

import React, { useState } from "react";
import { MotionDiv } from "./MotionComponents";

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
  delay,
}: IView) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <MotionDiv
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
    </MotionDiv>
  );
};

export default InViewWrapper;
