import React, { useState } from "react";
import emailjs from "emailjs-com";
import ButtonSendMail from "../button/btn-send-mail";
import { useForm } from "react-hook-form";
interface IProps {
  className?: string;
}
export default function ContactForm(props: IProps) {
  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const sendEmail = (data: any) => {
    setSending(true);
    emailjs
      .send("portfolio-site", "template_sv6ti95", data, "NPIx3sZ-IVmge8m6n")
      .then(
        (result) => {
          setSended(true);
          setTimeout(() => {
            setSended(false);
          }, 2000);
        },
        (error) => {}
      )
      .finally(() => {
        setSending(false);
        reset();
      });
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)} className={`${props.className} flex flex-col gap-4 w-full`}>
      <input
        {...register("name", { required: true })}
        type="text"
        name="name"
        id="name"
        placeholder="Seu nome"
        className={`${
          errors["name"] ? "border-red-500" : "border-violet-500 focus:border-violet-300"
        } border rounded-md bg-transparent p-3 focus:outline-none`}
      />
      <input
        {...register("subject", { required: true })}
        type="text"
        name="subject"
        id="subject"
        placeholder="Assunto"
        className={`${
          errors["subject"] ? "border-red-500" : "border-violet-500 focus:border-violet-300"
        } border rounded-md bg-transparent p-3 focus:outline-none`}
      />
      <textarea
        {...register("message", { required: true })}
        placeholder="Mensagem"
        name="message"
        id="message"
        cols={30}
        rows={10}
        className={`${
          errors["message"] ? "border-red-500" : "border-violet-500 focus:border-violet-300"
        } border rounded-md bg-transparent p-3 focus:outline-none resize-none`}
      ></textarea>{" "}
      <ButtonSendMail sended={sended} sending={sending} />
    </form>
  );
}
