import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/Form";
import { Input } from "../../components/Input";

//reglas de validacion
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Debe contener al menos 2 caracteres." })
    .max(50, { message: "Debe contener hasta 50 caracteres." }),
  email: z.string().email({ message: "Dirección de email invalido." }),
  phone: z.string().regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
    message:
      "Este formato de número de teléfono no se reconoce. Por favor verifique el país y el número.",
  }),
});

const ProfileForm = () => {
  //define tu formulario
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  //define un submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[400px] text-left"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="font-bold text-base leading-[22px]">
                Nombre *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="min-h-[46px] text-left"
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className="text-[#C84545] font-normal text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="font-bold text-base leading-[22px]">
                Email *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="min-h-[46px] text-left"
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className="text-[#C84545] font-normal text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="font-bold text-base leading-[22px]">
                Tu whatsapp para confirmar el turno. *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="min-h-[46px] text-left"
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className="text-[#C84545] font-normal text-sm" />
            </FormItem>
          )}
        />
        <p className="mt-[10px] mb-[20px] text-sm text-left">
          Al continuar, confirma que ha leído y acepta los{" "}
          <span className="hover:underline text-[#0069FF]">
            Términos de uso
          </span>{" "}
          y el{" "}
          <span className="hover:underline text-[#0069FF]">
            Aviso de privacidad
          </span>{" "}
          de Calendly.
        </p>
        <Button
          type="submit"
          className="bg-[#0069FF] border-[#0069FF] text-white text-base rounded-[40px] min-h-[44px] active:bg-[#004AB3] active:border-[#004AB3] hover:bg-[#005FE6] hover:border-[#005FE6]"
        >
          Schedule Event
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
