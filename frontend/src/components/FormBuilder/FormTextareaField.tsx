import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import React from "react";
import type { UseFormReturn } from "react-hook-form";

export const FormTextareaField: React.FC<
  {
    className?: string;
    labelClassName?: string;
    form: UseFormReturn<any>;
    name: string;
    label?: string | React.ReactNode;
    description?: string;
  } & Omit<React.ComponentProps<"textarea">, "form">
> = ({
  className,
  labelClassName,
  form,
  name,
  label,
  description,
  ...rest
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
          <FormControl>
            <Textarea {...field} {...rest} value={field.value ?? ""} />
          </FormControl>
          {!fieldState.error?.message && description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
