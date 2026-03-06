export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-600 space-y-8">
        <div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: March 2026</p>
        </div>

        <p>
          At The Digital Girlie, we respect your personal information and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Information We Collect</h2>
        <p>
          We collect information from and about users of our website, including information by which you may be personally identified, such as name, email address, and any other identifier by which you may be contacted online or offline ("personal information"). This includes information you provide by filling out forms on our website (such as our Formspree contact form).
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">How We Use Your Information</h2>
        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>To present our website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To carry out our obligations and enforce our rights arising from any billing and collection.</li>
          <li>To notify you about changes to our website or any products or services we offer.</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Payment Processing</h2>
        <p>
          If you purchase a service or package from us, we use a third-party payment processor (Stripe) to handle payments. We do not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Contact Information</h2>
        <p>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:hello@thedigitalgirlie.com" className="text-pink-500 hover:text-pink-600 font-semibold">hello@thedigitalgirlie.com</a>.
        </p>
      </div>
    </div>
  );
}