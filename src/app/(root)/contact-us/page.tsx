// import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import ScrollToTop from './_components/ScrollToTop';

// const formSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Please enter a valid email address'),
//   message: z.string().min(10, 'Message must be at least 10 characters'),
// });

const ContactUs = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     message: '',
  //   },
  // });

  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  //   toast.success("Message sent successfully! We'll get back to you soon.");
  //   form.reset();
  // };

  const contactInfo = [
    {
      icon: <Mail className='h-6 w-6' />,
      title: 'Email',
      content: 'info@russiavista.com',
      action: 'mailto:info@russiavista.com',
      buttonText: 'Send Email',
    },
    {
      icon: <Phone className='h-6 w-6' />,
      title: 'Phone',
      content: '+7 999 982 4840',
      action: 'tel:+79999824840',
      buttonText: 'Call Now',
    },
    {
      icon: <MessageSquare className='h-6 w-6' />,
      title: 'WhatsApp',
      content: '+7 999 982 4840',
      action: 'https://wa.me/79999824840',
      buttonText: 'Message on WhatsApp',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow'>
        <div className='container mx-auto px-4 py-12'>
          <SectionHeader
            title='Contact Us'
            description='Get in touch with our team for any questions about studying or working in Russia'
            className='mb-16'
          />

          <div className='mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {contactInfo.map((item, index) => (
              <Card key={index} className='animate-scale-in'>
                <CardContent className='flex flex-col items-center p-6 text-center'>
                  <div className='mb-4 rounded-full bg-primary/10 p-3 text-primary'>
                    {item.icon}
                  </div>
                  <h3 className='mb-2 text-xl font-bold'>{item.title}</h3>
                  <p className='mb-4 text-muted-foreground'>{item.content}</p>
                  <Button asChild variant='outline' className='w-full'>
                    <a
                      href={item.action}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {item.buttonText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* 
          <div className='rounded-lg bg-card p-8 shadow-sm'>
            <h3 className='mb-6 text-center text-2xl font-bold'>
              Send us a Message
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor='name'>Name</Label>
                      <FormControl>
                        <Input id='name' placeholder='Your name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor='email'>Email</Label>
                      <FormControl>
                        <Input
                          id='email'
                          type='email'
                          placeholder='Your email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor='message'>Message</Label>
                      <FormControl>
                        <textarea
                          id='message'
                          className='flex min-h-[120px] w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                          placeholder='How can we help you?'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit' className='w-full'>
                  Submit
                </Button>
              </form>
            </Form>
          </div> */}

          {/* <div className='mt-16'>
            <h3 className='mb-6 text-center text-2xl font-bold'>
              Our Location
            </h3>
            <div className='aspect-video w-full overflow-hidden rounded-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.8982198024524!2d37.615444377060834!3d55.75715097346019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sus!4v1715315763899!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                title='Careeropportia Office Location'
              ></iframe>
            </div>
          </div> */}
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
};

export default ContactUs;
