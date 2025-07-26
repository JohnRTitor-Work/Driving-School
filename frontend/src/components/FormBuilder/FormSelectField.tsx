import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import type { UseFormReturn } from "react-hook-form";

export type SelectOption = {
  value: string;
  label: string;
};

export const FormSelectField: React.FC<{
  className?: string;
  labelClassName?: string;
  form: UseFormReturn<any>;
  name: string;
  label?: string | React.ReactNode;
  description?: string;
  placeholder?: string;
  options: SelectOption[];
}> = ({
  className,
  labelClassName,
  form,
  name,
  label,
  description,
  placeholder = "Select an option",
  options,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn("", className)}>
          {label && (
            <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          )}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {!fieldState.error?.message && description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
