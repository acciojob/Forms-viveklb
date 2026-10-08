import React from "react";

export default function Card({ title, children }) {
  return (
    <section aria-labelledby="form-section-title">
      <h1 id="form-section-title">{title}</h1>
      {children}
    </section>
  );
}