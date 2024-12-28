import React, { useState } from "react";

function React18OptimisticUI() {
  const [name, setName] = useState("John Doe");
  const [pending, setPending] = useState(false);

  const handleChange = async (event) => {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    setPending(true);
    setName(newName); // Optimistic update
    // Simulate server update
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPending(false);
  };

  return (
    <form onSubmit={handleChange}>
      <p>Your name is: {name}</p>
      <input name="name" defaultValue={name} />
      <button type="submit" disabled={pending}>
        {pending ? "Updating..." : "Change Name"}
      </button>
    </form>
  );
}

export default React18OptimisticUI;
