import React from 'react'
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from '../components/ui/button';
import { ContactForm, contactFormSchema } from '../schema/contact';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "../components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import ReCAPTCHA from 'react-google-recaptcha'
import UrlFormContainer from './UrlFormContainer';

const UrlForm = () => {
  const [capVal, setCapVal] = useState<string | null>(null);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })
  return (
    <UrlFormContainer>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit()}
          className={``}
        >
          <FormField 
            control={form.control}
            name={``}
            render={({ field }) => {
              <FormItem>
                <FormLabel>
                  
                </FormLabel>
                <FormControl>
                  <Input />
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
        </form>
      </Form>
    </UrlFormContainer>
  )
}

export default UrlForm

const FormState = () => {
  return (
    <>
      
    </>
  )
}