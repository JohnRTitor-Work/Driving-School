import { cn } from "@/lib/utils";
import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { PasswordInput } from "@/components/ui/input/password-input";

export const FormPasswordField: React.FC<
  {
    className?: string;
    labelClassName?: string;
    form: UseFormReturn<any>;
    name: string;
    label?: string | React.ReactNode;
    description?: string;
  } & Omit<React.ComponentProps<"input">, "form" | "type">
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
            <PasswordInput {...field} {...rest} />
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
