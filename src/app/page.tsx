import Hero from "@/components/home/Hero";
import ServiceIntro from "@/components/home/ServiceIntro";
import ServiceListPreview from "@/components/home/ServiceListPreview";
import NewsPreview from "@/components/home/NewsPreview";
import CompanyPreview from "@/components/home/CompanyPreview";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceIntro />
      <ServiceListPreview />
      <NewsPreview />
      <CompanyPreview />
      <ContactCta />
    </>
  );
}
