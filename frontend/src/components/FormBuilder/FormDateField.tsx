import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";
import type { UseFormReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";

export const FormDateCalenderField: React.FC<{
  className?: string;
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
}> = ({
  className,
  form,
  name,
  label,
  description,
  placeholder = "Pick a Date",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn("", className)}>
          <FormLabel>{label}</FormLabel>
          <div>
            <Popover modal={true}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>{placeholder}</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(v) => field.onChange(v?.toISOString())}
                  captionLayout={"dropdown"}
                />
              </PopoverContent>
            </Popover>
            {!fieldState.error?.message && (
              <FormDescription>{description}</FormDescription>
            )}
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export const FormDateField: React.FC<
  {
    className?: string;
    labelClassName?: string;
    form: UseFormReturn<any>;
    name: string;
    label?: string | React.ReactNode;
    description?: string;
  } & Omit<React.ComponentProps<"input">, "form">
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
          <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...rest} value={field.value ?? ""} type="date" />
          </FormControl>
          {!fieldState.error?.message && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
