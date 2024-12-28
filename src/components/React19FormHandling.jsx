import React from "react";
import { useFormStatus } from "react-dom";

function React19FormHandling() {
  const { pending } = useFormStatus();

  const handleSubmit = async (formData) => {
    const username = formData.get("username");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Form submitted with username: ${username}`);
  };

  return (
    <form action={handleSubmit}>
      <input name="username" placeholder="Enter username" />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default React19FormHandling;
