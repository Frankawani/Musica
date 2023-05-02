import React from "react";

export const Section = ({ children, className }) => {
  return (
    <section className={`p-2 max-w-3xl  ${className}`}>
      {children}
    </section>
  );
};

