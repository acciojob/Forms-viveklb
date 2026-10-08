import React, { useState } from "react";
import Card from "./Card";

const initialValues = {
  full_name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export default function FormState() {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card title="Form with useState">
      <form id="info-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="full_name">Full-Name</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            value={values.full_name}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password-Confirmation</label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={values.password_confirmation}
            onChange={handleChange}
            required
          />
        </p>
        <button type="submit">Submit</button>
      </form>
      {submitted && <output aria-live="polite">Submitted for {values.full_name}.</output>}
    </Card>
  );
}