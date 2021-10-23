import BaseLayout from '@/layouts/BaseLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout imageUrl="/images/about-us.png">
        <h1>About Us</h1>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          <p>Spanning from East to West. With 54,000 km Coastline and 17,500 Islands</p>
        </div>

        <div
          style={{
            marginBottom: 16,
          }}
        >
          <p className="color-secondary bold">
            INDONESIA, a resourceful land. Rich of flavors, natural beauties, and biodiversity.
          </p>
        </div>

        <div
          style={{
            marginBottom: 16,
          }}
        >
          <p>
            62trade.com ready to take important role to empower international trades between Indonesia and the rest of
            the world.
          </p>
          <p>Ready to be a digital gateway for everyone, at any level of business.</p>
          <p>Let us walk together, hand in hand for a better future.</p>
        </div>
      </BaseLayout>
    </div>
  );
}
