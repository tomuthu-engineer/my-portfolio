"use client";

import { useEffect } from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  useEffect(() => {
    const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    // Define the gtag function globally, outside any block
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
    }

    const gtag = (...args: any[]) => {
      if (typeof window !== "undefined") {
        window.dataLayer.push(args);
      }
    };

    if (trackingId) {
      gtag("js", new Date());
      gtag("config", trackingId);
    }
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
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
