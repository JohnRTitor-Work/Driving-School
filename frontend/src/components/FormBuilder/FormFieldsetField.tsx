import { cn } from "@/lib/utils";
import React from "react";

export const FormFieldsetField: React.FC<{
  className?: string;
  legend: string;
  children: React.ReactNode;
}> = ({ className, legend, children }) => {
  return (
    <fieldset className={cn("border rounded-lg p-4 space-y-4", className)}>
      <legend className="font-semibold px-2">{legend}</legend>
      {children}
    </fieldset>
  );
};
