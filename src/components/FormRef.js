import React, { useRef } from "react";
import Card from "./Card";

export default function FormRef() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const resultRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    resultRef.current.textContent = `Submitted for ${fullNameRef.current.value} (${emailRef.current.value}).`;
  }

  return (
    <Card title="Form with useRef">
      <form id="info-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="full_name">Full-Name</label>
          <input id="full_name" name="full_name" type="text" ref={fullNameRef} required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" ref={emailRef} required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" ref={passwordRef} required />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password-Confirmation</label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            ref={passwordConfirmationRef}
            required
          />
        </p>
        <button type="submit">Submit</button>
      </form>
      <output ref={resultRef} aria-live="polite" />
    </Card>
  );
}