import { Button } from '@/components/fields/Button';
import { TextField, TextArea } from '@/components/fields/TextField';
import BaseLayout from '@/layouts/BaseLayout';
import axios from 'axios';
import Head from 'next/head';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import toast from 'react-hot-toast';

export default function Home() {
  const [formState, setFormState] = useState({ fullName: '', email: '', message: '' });
  const [isNotBot, setIsNotBot] = useState(false);
  const setField = (name, value) => {
    setFormState((old) => ({ ...old, [name]: value }));
  };
  const recaptchaRef = useRef();

  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout imageUrl="/images/contact.png">
        <h1>Contact</h1>
        <h6>Location</h6>
        <p>Sona Topas Tower, Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet, Jakarta Selatan, 12920.</p>
        <h6>Email</h6>
        <p>info@62trade.com</p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (isNotBot) {
              try {
                await axios.post('/api/contact', formState);
                toast.success('Message has been successfully sent');
                setFormState({
                  fullName: '',
                  email: '',
                  message: '',
                });
                recaptchaRef.current.reset?.();
                setIsNotBot(false);
              } catch (e) {
                toast.success('Failed to send message');
                console.error(e);
              }
            }
          }}
        >
          <TextField
            value={formState.fullName}
            name="fullName"
            onChange={(e) => setField(e.target.name, e.target.value)}
            placeholder="Full Name"
          />
          <TextField
            name="email"
            type="email"
            value={formState.email}
            onChange={(e) => setField(e.target.name, e.target.value)}
            placeholder="Email Address"
            required
          />
          <TextArea
            name="message"
            value={formState.message}
            onChange={(e) => setField(e.target.name, e.target.value)}
            placeholder="Your Message Here"
            rows={3}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            onChange={(value) => {
              setIsNotBot(value);
            }}
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY}
          />
          <Button type="submit" disabled={!isNotBot} style={{ marginTop: 20 }}>
            Send Message
          </Button>
        </form>
      </BaseLayout>
    </div>
  );
}
