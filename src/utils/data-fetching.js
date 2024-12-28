"use server";

async function fetchData() {
  const response = await fetch("https://dummyjson.com/todos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export const fetchPromise = fetchData();
