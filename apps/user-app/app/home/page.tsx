import { HeroSection } from "../../components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | PayEase",
  description: "Welcome to the PayEase digital wallet application",
};

export default function Home() {

  return <HeroSection />;
}