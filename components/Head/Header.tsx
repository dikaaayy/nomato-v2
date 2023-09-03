import Head from "next/head";

export default function Header({ title }: any) {
  const concatted = `${title} | Tempat`;
  return (
    <Head>
      <title>{concatted}</title>
      <link rel="icon" href="./logo.svg" />
    </Head>
  );
}
