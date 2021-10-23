import BaseLayout from '@/layouts/BaseLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vision Mission</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout imageUrl="/images/vision-mission.png">
        <h1>Vision Mission</h1>
        <h6>Our Vision</h6>
        <p>Becoming number one preferred digital platform of international trades for Indonesia and the world.</p>
        <h6>Our Mission</h6>
        <p>
          Empowering Indonesia’s MSME nationwide to go international, collaboration with all supporting function such as
          financial, supply chain and logistic, and expanding international network by building partnership with
          overseas well known digital platform.
        </p>
        <h6>Values</h6>

        <ol style={{ marginBottom: 40 }}>
          <li>Simple</li>
          <li>Trustworthy</li>
          <li>Problem Solver</li>
        </ol>

        <img src="/images/indo-map.svg" width="100%" alr="indo map" />
      </BaseLayout>
    </div>
  );
}
