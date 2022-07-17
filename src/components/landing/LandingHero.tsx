import Image from 'next/image';
import Link from 'next/link';

const LandingHero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="https://fjrflrzxudmtlaaltbjc.supabase.co/storage/v1/object/public/photos/LILYGO-T-Higrow-ESP32-Soil-Tester-DHT11-BEM280-Garden-Flowers-Temperature-Moisture-Sensor-WiFi-Bluetooth-Wireless.jpg_Q90.jpg_.webp"
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
            With Stamena, you can connect your LILYGO TT-Higrow plant monitor to
            your profile to start tracking your plants&apos; hydration and
            environment quality, competing with friends to see who can be the
            best plant parent, and seeing where you stack up on the global plant
            care leaderboards.
          </p>
          <Link href="/api/auth/login">
            <div className="btn btn-primary">Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
