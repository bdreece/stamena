import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stamena</title>
        <meta name="description" content="Finally, competitive plant care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://ae01.alicdn.com/kf/Sb3f1de0209b04e37aaeb66c8d094d3ebx/LILYGO-T-Higrow-ESP32-Soil-Tester-DHT11-BEM280-Garden-Flowers-Temperature-Moisture-Sensor-WiFi-Bluetooth-Wireless.jpg_Q90.jpg_.webp"
            className="max-w-sm rounded-lg shadow-xl"
            width={336}
            height={336}
            alt="LilyGo T-Grow"
          />
          <div>
            <h1 className="text-5xl font-bold display">
              Finally, competitive plant care
            </h1>
            <p className="py-6 max-w-lg">
              With Stamena, you can connect your LILYGO TT-Higrow plant monitor
              to your profile to start tracking your plants&apos; hydration and
              environment quality, competing with friends to see who can be the
              best plant parent, and seeing where you stack up on the global
              plant care leaderboards.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
