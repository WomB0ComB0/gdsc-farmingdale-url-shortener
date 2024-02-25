import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from 'react-hook-form'
import { useForm } from "react-hook-form"
import { sendEmail, TSendEmail } from "@/schema/send-emails";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
export const NewsLetter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TSendEmail>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(sendEmail)
  });

  const onSubmit: SubmitHandler<TSendEmail> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center justify-center`}
    >
      <Label htmlFor={"UserEmail"} className={`sr-only`}>Email address</Label>
      <div
        className="w-full focus-within:ring lg:flex lg:items-center lg:justify-center lg:gap-0 md:flex md:items-center md:justify-center md:gap-10 sm:flex sm:items-center sm:justify-center sm:gap-10"
      >
        <Input id={"UserEmail"} placeholder={`Email address`} {...register("email")} type={`email`} className={`sm:rounded-r-lg lg:rounded-r-none w-full`} />
        <Button type={`submit`} className={`rounded-l-none lg:w-20 sm:w-full`}>Subscribe</Button>
      </div>

      {
        errors.email && (
          <p
            className={``}
          >
            {errors.email.message}</p>)
      }
    </form>
  );
};

