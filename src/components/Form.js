import React from "react";
import Card from "./Card";

export default function Form() {
  return (
    <Card title="Form layout">
      <form id="info-form">
        <p>
          <label htmlFor="full_name">Full-Name</label>
          <input id="full_name" name="full_name" type="text" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password-Confirmation</label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            required
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}