import {
  addPupilSchema,
  type AddPupilPayload,
  type PupilInfo,
} from "@/api/pupil/pupil.api.schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddPupil, useEditPupilById } from "@/api/pupil/pupil.mutation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import { FormInputField } from "@/components/FormBuilder/FormInputField";
import {
  FormSelectField,
  type SelectOption,
} from "@/components/FormBuilder/FormSelectField";
import { FormTextareaField } from "@/components/FormBuilder/FormTextareaField";
import { FormCheckboxField } from "@/components/FormBuilder/FormCheckboxField";
import { FormFieldsetField } from "@/components/FormBuilder/FormFieldsetField";
import { FormDateCalenderField } from "@/components/FormBuilder/FormDateField";
import { FormPasswordField } from "@/components/FormBuilder/FormPasswordField";
import { FormPhoneField } from "@/components/FormBuilder/FormPhoneField";

type BasePupilFormProps = {
  initialData?: Partial<PupilInfo>;
  type: "add" | "edit";
  onSuccessAction?: () => void;
};

const titleOptions: SelectOption[] = [
  { value: "Mr", label: "Mr" },
  { value: "Mrs", label: "Mrs" },
  { value: "Miss", label: "Miss" },
  { value: "Ms", label: "Ms" },
  { value: "Dr", label: "Dr" },
];

const genderOptions: SelectOption[] = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

const pupilTypeOptions: SelectOption[] = [
  { value: "Manual Gearbox", label: "Manual Gearbox" },
  { value: "Automatic", label: "Automatic" },
  { value: "Motorcycle", label: "Motorcycle" },
  { value: "HGV", label: "HGV" },
];

const licenseTypeOptions: SelectOption[] = [
  { value: "No License", label: "No License" },
  { value: "Provisional", label: "Provisional" },
  { value: "Full License", label: "Full License" },
];

export function BasePupilForm({
  initialData,
  type,
  onSuccessAction,
}: BasePupilFormProps) {
  const form = useForm<AddPupilPayload>({
    resolver: zodResolver(addPupilSchema),
    defaultValues: initialData ?? {
      allowTextMessaging: false,
      passedTheory: false,
      fott: false,
      fullAccess: false,
      pupilCaution: false,
      discount: "0%",
      pupilType: "Manual Gearbox",
      pupilOwner: "Instructor",
      licenseType: "No License",
    },
  });

  const addMutation = useAddPupil();
  const editMutation = useEditPupilById();

  const submitMutation = type === "add" ? addMutation : editMutation;
  const submitText = {
    edit: {
      normal: "Edit Pupil",
      submitting: "Editing Pupil...",
    },
    add: {
      normal: "Add Pupil",
      submitting: "Adding Pupil...",
    },
  };

  const onSubmit: SubmitHandler<AddPupilPayload> = async (data) => {
    if (type === "add") {
      await addMutation.mutateAsync(data);
    } else {
      const { _id: id = "" } = initialData ?? {};
      await editMutation.mutateAsync({ id, payload: data });
    }
  };

  const { isSuccess } = submitMutation;
  useEffect(() => {
    if (isSuccess && onSuccessAction) {
      onSuccessAction();
    }
  }, [isSuccess, onSuccessAction]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldsetField legend="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <div className="md:col-span-2">
                <FormSelectField
                  form={form}
                  name="title"
                  label="Title"
                  options={titleOptions}
                  placeholder="Select title"
                />
              </div>

              <div className="md:col-span-5">
                <FormInputField
                  form={form}
                  name="forename"
                  label="Forename *"
                  required
                />
              </div>

              <div className="md:col-span-5">
                <FormInputField
                  form={form}
                  name="surname"
                  label="Surname *"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormDateCalenderField
                form={form}
                name="dob"
                label="Date of Birth *"
              />
              <FormSelectField
                form={form}
                name="gender"
                label="Gender *"
                options={genderOptions}
                placeholder="Select gender"
              />
            </div>
          </FormFieldsetField>

          <FormFieldsetField legend="Contact Information">
            <FormInputField
              form={form}
              name="email"
              label="Email"
              type="email"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormPhoneField
                form={form}
                name="home.mobile"
                label="Mobile"
                placeholder="Enter mobile number"
              />
              <FormPhoneField
                form={form}
                name="home.work"
                label="Work"
                placeholder="Enter work number"
              />
            </div>

            <FormCheckboxField
              form={form}
              name="allowTextMessaging"
              label="Opt in Text Messaging"
            />
          </FormFieldsetField>

          <FormFieldsetField legend="Pickup Address">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormInputField
                  form={form}
                  name="pickupAddress.postcode"
                  label="Postcode"
                />
                <FormInputField
                  form={form}
                  name="pickupAddress.houseNo"
                  label="House No"
                />
              </div>
              <FormInputField
                form={form}
                name="pickupAddress.address"
                label="Address"
                className="md:col-span-3"
              />
            </div>
          </FormFieldsetField>

          <FormFieldsetField legend="Home Address">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormInputField
                  form={form}
                  name="homeAddress.postcode"
                  label="Postcode"
                />
                <FormInputField
                  form={form}
                  name="homeAddress.houseNo"
                  label="House No"
                />
              </div>
              <FormInputField
                form={form}
                name="homeAddress.address"
                label="Address"
                className="md:col-span-3"
              />
            </div>
          </FormFieldsetField>

          <FormFieldsetField legend="Lesson & License Info">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <div className="grid grid-cols-2 gap-10">
                <FormSelectField
                  form={form}
                  name="pupilType"
                  label="Pupil Type"
                  options={pupilTypeOptions}
                />
                <FormSelectField
                  form={form}
                  name="licenseType"
                  label="License Type"
                  options={licenseTypeOptions}
                />
              </div>
              <FormInputField form={form} name="licenseNo" label="License No" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FormInputField form={form} name="certNo" label="Cert No" />
              <FormDateCalenderField
                form={form}
                name="datePassed"
                label="Date Passed"
              />
            </div>
          </FormFieldsetField>

          <FormFieldsetField legend="Administrative Details">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormInputField
                form={form}
                name="pupilOwner"
                label="Pupil Owner"
              />
              <FormInputField
                form={form}
                name="allocatedTo"
                label="Allocated To"
              />
              <FormInputField
                form={form}
                name="defaultProduct"
                label="Default Product"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FormInputField form={form} name="discount" label="Discount" />
              <FormInputField
                form={form}
                name="usualAvailability"
                label="Usual Availability"
              />
            </div>
          </FormFieldsetField>

          <FormFieldsetField legend="Access Flags & Security">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormCheckboxField
                form={form}
                name="passedTheory"
                label="Passed Theory"
              />
              <FormCheckboxField form={form} name="fott" label="FOTT" />
              <FormCheckboxField
                form={form}
                name="fullAccess"
                label="Full Access"
              />
              <FormCheckboxField
                form={form}
                name="pupilCaution"
                label="Pupil Caution"
              />
            </div>

            <FormPasswordField
              form={form}
              name="onlinePassword"
              label="Online Password"
            />
          </FormFieldsetField>

          <FormTextareaField form={form} name="notes" label="Notes" rows={3} />

          <div className="flex justify-end space-x-4">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting || submitMutation.isPending}
              className="min-w-[120px]"
            >
              {form.formState.isSubmitting || submitMutation.isPending
                ? submitText[type]["submitting"]
                : submitText[type]["normal"]}
            </Button>
          </div>

          {submitMutation.isError && (
            <div className="text-red-500 text-sm">
              Failed to {type} pupil. Please check your input.
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
