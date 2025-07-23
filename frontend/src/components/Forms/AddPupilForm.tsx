import {
  addPupilSchema,
  type AddPupilPayload,
} from "@/api/pupil/pupil.api.schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { useAddPupil } from "@/api/pupil/pupil.mutation";

export function AddPupilForm() {
  const form = useForm<AddPupilPayload>({
    resolver: zodResolver(addPupilSchema),
    // some default values, as per the schema
    defaultValues: {
      allowTextMessaging: false,
      passedTheory: false,
      fott: false,
      fullAccess: false,
      pupilCaution: false,
    },
  });

  const addPupilMutation = useAddPupil();

  const onSubmit: SubmitHandler<AddPupilPayload> = (data) => {
    addPupilMutation.mutateAsync(data);
  };

  return (
    <div>
      <Form {...form}>{/* TODO: Implement it */}</Form>
    </div>
  );
}
