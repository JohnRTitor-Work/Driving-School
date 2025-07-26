import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/input/phone-input";
import { cn } from "@/lib/utils";
import React from "react";
import type { UseFormReturn } from "react-hook-form";
import * as RPNInput from "react-phone-number-input";

export const FormPhoneField: React.FC<{
  className?: string;
  form: UseFormReturn<any>;
  name: string;
  label?: string | React.ReactNode;
  description?: string;
  defaultCountry?: RPNInput.Country;
  placeholder?: string;
}> = ({
  className,
  form,
  name,
  label,
  description,
  placeholder,
  defaultCountry = "GB",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn("", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <PhoneInput
              value={field.value}
              onChange={field.onChange}
              className="w-full"
              defaultCountry={defaultCountry}
              placeholder={placeholder}
            />
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
