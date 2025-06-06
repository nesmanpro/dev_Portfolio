import React from "react";

export default function TechIcon({
  component,
}: {
  component: React.ElementType;
}) {
  const Component = component;
  return (
    <>
      <Component className="size-7 text-emerald-400" />
    </>
  );
}
