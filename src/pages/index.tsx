import Layout from "../../components/Layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <Layout />
      <SpeedInsights />
    </>
  );
}
