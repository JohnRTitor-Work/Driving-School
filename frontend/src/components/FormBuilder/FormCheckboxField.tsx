import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import React from "react";
import type { UseFormReturn } from "react-hook-form";

export const FormCheckboxField: React.FC<{
  className?: string;
  form: UseFormReturn<any>;
  name: string;
  label: React.ReactNode;
  description?: string;
}> = ({ className, form, name, label, description }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem
          className={cn(
            "flex flex-row items-start space-x-3 space-y-0",
            className,
          )}
        >
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-sm font-normal cursor-pointer">
              {label}
            </FormLabel>
            {!fieldState.error?.message && description && (
              <FormDescription>{description}</FormDescription>
            )}
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};
