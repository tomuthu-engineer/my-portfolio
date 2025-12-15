import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muthupandi</title>
        <meta
          name="description"
          content="Something new is being crafted."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          {/* Small signal */}
          <span className="text-accent uppercase tracking-[0.4em] text-xs">
            Work in Progress
          </span>

          {/* Main statement */}
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Something <br />
            <span className="text-accent">intentional</span>
            <br />
            is taking shape.
          </h1>

          {/* Subtle line */}
          <p className="mt-8 text-white/50 max-w-md mx-auto text-sm">
          
            Just focus, clarity, and craft.
          </p>

          {/* Signature */}
          <div className="mt-14 text-xs text-white/40 tracking-widest">
            MUTHUPANDI
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
