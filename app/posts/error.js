'use client';
/* This file is used to create a error component for posts pages */
import { useEffect } from "react";

const Error = ({ error, reset }) => {
    
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
};

export default Error;