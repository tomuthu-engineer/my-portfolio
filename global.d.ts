// global.d.ts

export {};

declare global {
  interface Window {
    gtag: Function;
    dataLayer: any[];
  }
}
