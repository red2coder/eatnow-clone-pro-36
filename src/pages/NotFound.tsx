
import React from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page not found</h2>
      <p className="max-w-md mt-2 text-gray-600">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button 
        className="mt-6"
        onClick={() => window.location.href = "/"}
      >
        Back to home
      </Button>
    </div>
  );
};

export default NotFound;
