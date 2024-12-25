"use client"

import { useEffect } from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Ensure the GA script is loaded and initialized with the dynamic tracking ID
    const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    console.log('first',trackingId)

    if (trackingId && typeof window !== "undefined") {
      window.gtag("config", trackingId);
    }
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive" // Ensure it's loaded after the page is interactive
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
