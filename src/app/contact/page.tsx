import ContactForm from "@/components/ContactForm";
import AwardsSection from "@/components/AwardsSection";

export const metadata = {
  title: "Contact",
  description: "Get in touch with The Digital Girlie to level up your personal brand.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ContactForm />
      <AwardsSection />
    </div>
  );
}