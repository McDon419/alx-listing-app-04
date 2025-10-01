
import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Landing Page</h1>

      {/* Small Buttons */}
      <div className="flex gap-3">
        <Button title="Small - sm" className="text-sm px-2 py-1 rounded-sm" />
        <Button title="Small - md" className="text-sm px-2 py-1 rounded-md" />
        <Button title="Small - full" className="text-sm px-2 py-1 rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-3">
        <Button title="Medium - sm" className="text-base px-4 py-2 rounded-sm" />
        <Button title="Medium - md" className="text-base px-4 py-2 rounded-md" />
        <Button title="Medium - full" className="text-base px-4 py-2 rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-3">
        <Button title="Large - sm" className="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large - md" className="text-lg px-6 py-3 rounded-md" />
        <Button title="Large - full" className="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
