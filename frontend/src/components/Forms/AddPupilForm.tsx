import {
  addPupilSchema,
  type AddPupilPayload,
} from "@/api/pupil/pupil.api.schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddPupil } from "@/api/pupil/pupil.mutation";
import { Button } from "../ui/button";

export function AddPupilForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<AddPupilPayload>({
    resolver: zodResolver(addPupilSchema),
    // set some default values for the form
    defaultValues: {
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

  const addPupilMutation = useAddPupil();

  const onSubmit: SubmitHandler<AddPupilPayload> = async (data) => {
    await addPupilMutation.mutateAsync(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl mx-auto"
      >
        <div>
          <label className="block font-semibold">Title</label>
          <select
            {...register("title")}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          <span className="text-red-500 text-sm">{errors.title?.message}</span>
        </div>
        <div>
          <label className="block font-semibold">Forename *</label>
          <input
            {...register("forename")}
            className="border rounded px-2 py-1 w-full"
          />
          <span className="text-red-500 text-sm">
            {errors.forename?.message}
          </span>
        </div>
        <div>
          <label className="block font-semibold">Surname *</label>
          <input
            {...register("surname")}
            className="border rounded px-2 py-1 w-full"
          />
          <span className="text-red-500 text-sm">
            {errors.surname?.message}
          </span>
        </div>
        <div>
          <label className="block font-semibold">Date of Birth *</label>
          <input
            type="date"
            {...register("dob")}
            className="border rounded px-2 py-1 w-full"
          />
          <span className="text-red-500 text-sm">{errors.dob?.message}</span>
        </div>
        <div>
          <label className="block font-semibold">Gender *</label>
          <select
            {...register("gender")}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <span className="text-red-500 text-sm">{errors.gender?.message}</span>
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            {...register("email")}
            className="border rounded px-2 py-1 w-full"
          />
          <span className="text-red-500 text-sm">{errors.email?.message}</span>
        </div>

        <fieldset className="border rounded p-2">
          <legend className="font-semibold">Home Contact</legend>
          <div>
            <label className="block">Mobile</label>
            <input
              {...register("home.mobile")}
              className="border rounded px-2 py-1 w-full"
            />
            <span className="text-red-500 text-sm">
              {errors.home?.mobile?.message}
            </span>
          </div>
          <div>
            <label className="block">Work</label>
            <input
              {...register("home.work")}
              className="border rounded px-2 py-1 w-full"
            />
            <span className="text-red-500 text-sm">
              {errors.home?.work?.message}
            </span>
          </div>
        </fieldset>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("allowTextMessaging")}
              className="mr-2"
            />
            Allow Text Messaging
          </label>
        </div>

        <fieldset className="border rounded p-2">
          <legend className="font-semibold">Pickup Address</legend>
          <div>
            <label className="block">Postcode</label>
            <input
              {...register("pickupAddress.postcode")}
              className="border rounded px-2 py-1 w-full"
            />
            <span className="text-red-500 text-sm">
              {errors.pickupAddress?.postcode?.message}
            </span>
          </div>
          <div>
            <label className="block">House No</label>
            <input
              {...register("pickupAddress.houseNo")}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block">Address</label>
            <input
              {...register("pickupAddress.address")}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </fieldset>

        <fieldset className="border rounded p-2">
          <legend className="font-semibold">Home Address</legend>
          <div>
            <label className="block">Postcode</label>
            <input
              {...register("homeAddress.postcode")}
              className="border rounded px-2 py-1 w-full"
            />
            <span className="text-red-500 text-sm">
              {errors.homeAddress?.postcode?.message}
            </span>
          </div>
          <div>
            <label className="block">House No</label>
            <input
              {...register("homeAddress.houseNo")}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block">Address</label>
            <input
              {...register("homeAddress.address")}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </fieldset>

        <div>
          <label className="block font-semibold">Pupil Type</label>
          <select
            {...register("pupilType")}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="Manual Gearbox">Manual Gearbox</option>
            <option value="Automatic">Automatic</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="HGV">HGV</option>
          </select>
          <span className="text-red-500 text-sm">
            {errors.pupilType?.message}
          </span>
        </div>
        <div>
          <label className="block font-semibold">Pupil Owner</label>
          <input
            {...register("pupilOwner")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Allocated To</label>
          <input
            {...register("allocatedTo")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">License Type</label>
          <select
            {...register("licenseType")}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="No License">No License</option>
            <option value="Provisional">Provisional</option>
            <option value="Full License">Full License</option>
          </select>
          <span className="text-red-500 text-sm">
            {errors.licenseType?.message}
          </span>
        </div>
        <div>
          <label className="block font-semibold">License No</label>
          <input
            {...register("licenseNo")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("passedTheory")}
              className="mr-2"
            />
            Passed Theory
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" {...register("fott")} className="mr-2" />
            FOTT
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("fullAccess")}
              className="mr-2"
            />
            Full Access
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("pupilCaution")}
              className="mr-2"
            />
            Pupil Caution
          </label>
        </div>

        <div>
          <label className="block font-semibold">Cert No</label>
          <input
            {...register("certNo")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Date Passed</label>
          <input
            type="date"
            {...register("datePassed")}
            className="border rounded px-2 py-1 w-full"
          />
          <span className="text-red-500 text-sm">
            {errors.datePassed?.message}
          </span>
        </div>

        <div>
          <label className="block font-semibold">Usual Availability</label>
          <input
            {...register("usualAvailability")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Discount</label>
          <input
            {...register("discount")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Default Product</label>
          <input
            {...register("defaultProduct")}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Online Password</label>
          <input
            type="password"
            {...register("onlinePassword")}
            className="border rounded px-2 py-1 w-full"
          />
          <span className="text-red-500 text-sm">
            {errors.onlinePassword?.message}
          </span>
        </div>
        <div>
          <label className="block font-semibold">Notes</label>
          <textarea
            {...register("notes")}
            className="border rounded px-2 py-1 w-full"
            rows={3}
          />
          <span className="text-red-500 text-sm">{errors.notes?.message}</span>
        </div>

        <Button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isSubmitting || addPupilMutation.isPending}
        >
          {isSubmitting || addPupilMutation.isPending
            ? "Adding..."
            : "Add Pupil"}
        </Button>
        {addPupilMutation.isError && (
          <div className="text-red-500 mt-2">
            Failed to add pupil. Please check your input.
          </div>
        )}
      </form>
    </div>
  );
}
