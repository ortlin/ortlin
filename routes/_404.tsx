import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-7xl text-slate-100">404</h1>
        <h2 class="text-xl text-slate-400 mb-4">Page not found</h2>
      </div>
    </>
  );
}
