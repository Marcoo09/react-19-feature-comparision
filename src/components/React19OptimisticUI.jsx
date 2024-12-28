import React from "react";
import { useOptimistic } from "react";

function React19OptimisticUI() {
  const [optimisticName, setOptimisticName] = useOptimistic("John Doe");

  const handleChange = async (formData) => {
    const newName = formData.get("name");
    setOptimisticName(newName); // Optimistic update
    // Simulate server update
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <form action={handleChange}>
      <p>Your name is: {optimisticName}</p>
      <input name="name" defaultValue={optimisticName} />
      <button type="submit">Change Name</button>
    </form>
  );
}

export default React19OptimisticUI;
