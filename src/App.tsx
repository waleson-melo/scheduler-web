import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

function App() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="joaofulano@gmail.com" />
                  </FormControl>
                  <FormDescription>Email do usuário.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={() => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="123456" />
                  </FormControl>
                  <FormDescription>Senha do usuário.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Entrar</Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default App;
