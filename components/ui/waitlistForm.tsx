"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HyperText from "@/components/ui/hyper-text";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// Define the Zod schema for validation
const formSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required." }),
  lastname: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
});

// Define the form values type
type FormSchemaType = z.infer<typeof formSchema>;

export function SignupFormDemo() {
  // Set up the form with react-hook-form and Zod schema validation
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: FormSchemaType) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-1 md:p-0">
      <HyperText
        className="text-3xl font-bold text-black dark:text-white"
        text="Welcome to Routi"
      />
      <p className="text-neutral-600 text-sm max-w-sm mt-0 dark:text-neutral-300">
        Join our waitlist to be the first to try our product and receive the
        latest updates and information.
      </p>

      {/* The form element uses react-hook-form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-6 space-y-6">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstname">First name</FormLabel>
                  <FormControl>
                    <Input
                      id="firstname"
                      placeholder="Tyler"
                      {...field}
                      className="bg-muted/30"
                    />
                  </FormControl>
                  <FormMessage className="text-xs">
                    {form.formState.errors.firstname?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="lastname">Last name</FormLabel>
                  <FormControl>
                    <Input
                      id="lastname"
                      placeholder="Durden"
                      {...field}
                      className="bg-muted/30"
                    />
                  </FormControl>
                  <FormMessage className="text-xs">
                    {form.formState.errors.lastname?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="projectmayhem@routi.com"
                    {...field}
                    className="bg-muted/30"
                  />
                </FormControl>
                <FormMessage className="text-xs">
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="company">Company Name</FormLabel>
                <FormControl>
                  <Input
                    id="company"
                    placeholder="Routi Pty Ltd"
                    {...field}
                    className="bg-muted/30"
                  />
                </FormControl>
                <FormMessage className="text-xs">
                  {form.formState.errors.company?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Join Waitlist &rarr;
            <BottomGradient />
          </button>
        </form>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
