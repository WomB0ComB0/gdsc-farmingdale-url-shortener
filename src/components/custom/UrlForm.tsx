import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { urlShortener, TShortenerSchema } from '@/schema/input';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import ReCAPTCHA from 'react-google-recaptcha'
import { UrlFormContainer } from './UrlFormContainer';
import { db } from '@/core/firebase';
import { addDoc, collection, } from 'firebase/firestore';

interface UrlShortenerProps {
  url: string;
  slug: string;
}

export const UrlForm: React.FC = () => {
  const [capVal, setCapVal] = useState<string | null>(null);
  const form = useForm<TShortenerSchema>({
    resolver: zodResolver(urlShortener),
  })
  const onSubmit = (data: UrlShortenerProps) => {
    if (capVal) {
      addDoc(collection(db, "urls"), data);
    }
  }
  
  return (
    <UrlFormContainer>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`
          
          `}
        >0
          <FormField
            control={form.control}
            name={`url`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Enter your email" type={`url`} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`slug`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Enter your email" type={`text`} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ReCAPTCHA
            className={`w-full flex items-center justify-center rounded-md h-fit`}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(val: string | null) => { setCapVal(val) }}
          />
          <Button
            disabled={!capVal && form.formState.isSubmitting}
            className={``}
          >
            Shorten
          </Button>
        </form>
      </Form>
    </UrlFormContainer>
  )
}
