import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/Form";
import { Input } from "../../../components/Input";

import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../zustand/store";
import axios from "axios";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

type Props = {
  appointmentDate: string;
};

const ProfileForm = ({ appointmentDate }: Props) => {
  const service = useStore((state) => state.service);
  const navigate = useNavigate();
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

  //define tu formulario
  //<z.infer<typeof formSchema>>
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  //define un submit handler
  //: z.infer<typeof formSchema> => tipado de values parameters
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(dayjs(appointmentDate).format("HH:mm:ss"));
    try {
      const response = await axios.post("/appointment", {
        date: dayjs(appointmentDate).format("MM-DD-YYYY"),
        time: dayjs(appointmentDate).format("HH:mm:ss"),
        name: values.name,
        email: values.email,
        phone: values.phone,
        service: service.name,
      });
      if (response.status === 200) {
        return navigate(`/corte de pelo/invitees/${response.data.id}`);
      }
      // console.log("no se pudo agendar el turno")
    } catch (error) {
      console.log(error);
    }
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
        <button
          type="submit"
          className="font-bold py-[8px] px-[16px] bg-[#006aff] border-[#0069FF] rounded-[40px] text-white text-base min-h-[44px] active:bg-[#004AB3] active:border-[#004AB3] hover:bg-[#005FE6] hover:border-[#005FE6]"
        >
          Schedule Event
        </button>
      </form>
    </Form>
  );
};

export default ProfileForm;
