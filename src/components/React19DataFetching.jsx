"use client";
// React19DataFetching.jsx
import React, { use } from "react";
import { fetchPromise } from "../utils/data-fetching";

function React19DataFetching() {
  const data = use(fetchPromise);

  return (
    <div>
      <h3>Data Fetched with React 19</h3>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export default React19DataFetching;
