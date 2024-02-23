import z from 'zod';

export const contactFormSchema = z.object({
  url: z.string().url(),
  slug: z.string().min(1).max(255),
});

export type ContactForm = z.infer<typeof contactFormSchema>;