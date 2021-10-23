import { Button } from '@/components/fields/Button';
import { TextField, TextArea } from '@/components/fields/TextField';
import BaseLayout from '@/layouts/BaseLayout';
import Head from 'next/head';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout imageUrl="/images/contact.png">
        <h1>Contact</h1>
        <h6>Location</h6>
        <p>Sona Topas Tower, Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet, Jakarta Selatan, 12920.</p>
        <h6>Email</h6>
        <p>info@62trade.com</p>
        <h6>Values</h6>

        <form>
          <TextField placeholder="Full Name" />
          <TextField placeholder="Email Address" />
          <TextArea placeholder="Your Message Here" rows={3} />
          <ReCAPTCHA sitekey="6Ldgz-scAAAAACoMsfKYkTTKUJs7xfpKRiTVC0HL" />
          <Button style={{ marginTop: 20 }}>Send Message</Button>
        </form>
      </BaseLayout>
    </div>
  );
}
