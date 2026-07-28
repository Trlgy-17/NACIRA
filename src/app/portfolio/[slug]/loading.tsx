import React from "react";

export default function Loading() {
  return (
    <div className="pt-32 pb-24 bg-[#fcf9f2] text-[#222220] container-custom space-y-8 animate-pulse">
      <div className="h-6 w-32 bg-[#e6ded1] rounded" />
      <div className="h-16 w-3/4 bg-[#e6ded1] rounded" />
      <div className="h-96 w-full bg-[#e6ded1] rounded" />
    </div>
  );
}
