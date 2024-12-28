import React, { useState } from "react";

function React18FormHandling() {
  const [username, setUsername] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPending(false);
    alert(`Form submitted with username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default React18FormHandling;
