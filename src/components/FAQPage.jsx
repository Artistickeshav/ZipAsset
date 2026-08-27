import { useState } from "react";

function FAQPage() {
  const faqs = [
    {
      q: "What is ZipAsset?",
      a: "ZipAsset is a marketplace-style platform for investing in clean energy and mobility infrastructure across four key segments: EV DC fast charging, battery energy storage, passenger fleets, and cargo logistics. You can own fractional shares of revenue-generating infrastructure assets with clear return profiles.",
    },
    {
      q: "What segments can I invest in?",
      a: "ZipAsset offers four investment segments: (1) EV DC Fast Charging - high-utilization chargers across retail, fleet, and highway corridors; (2) Battery Energy Storage (BESS) - strategic energy storage systems; (3) EV Passenger Fleets - intelligent fleet charging and optimization; (4) EV Cargo Fleets - commercial logistics infrastructure. Each segment has distinct risk-return profiles and deployment characteristics.",
    },
    {
      q: "How does fractional investment work?",
      a: "Instead of buying an entire infrastructure asset, you can invest a minimum ticket starting at Rs 1,500. Your investment is pooled with others to fund asset-level deployment, and you earn proportional returns based on utilization, yield rates, and operational performance across all segments.",
    },
    {
      q: "What are the risk levels across segments?",
      a: "Each segment and asset class is categorized by risk tier: Low Risk assets have stable, predictable returns; Medium Risk assets offer moderate growth with moderate volatility; High Risk assets provide higher potential returns with greater variability. Risk profiles vary by segment type, location, operational model, and market conditions.",
    },
    {
      q: "What is the expected return?",
      a: "APY ranges vary by segment and asset class, from 9.5% to 19.5% depending on deployment type and risk profile. Returns depend on asset utilization, operational efficiency, market demand, and pricing conditions. Actual returns may vary based on real-world operational performance.",
    },
    {
      q: "What is the lock period?",
      a: "Each asset class has a defined lock period typically ranging from 45 to 210 days depending on segment and deployment type. During the lock period, your investment is deployed and generating returns. Early withdrawal is not supported, but lock periods end on schedule.",
    },
    {
      q: "How do I invest?",
      a: "Browse opportunities across all four segments on the Marketplace, use the Investment Simulator to model returns based on your preferred asset class and risk profile, review detailed disclosures, and then deploy your allocation. The simulator lets you preview daily, monthly, and annual return estimates.",
    },
    {
      q: "Is my investment secure?",
      a: "Every investment is backed by physical infrastructure deployed at a specific location with real host-site contracts and transparent performance monitoring. However, as with any infrastructure investment, there are inherent risks including utilization variability, operational dependencies, and market conditions. Review our Risk Disclosure before investing.",
    },
    {
      q: "Who is ZipAsset for?",
      a: "ZipAsset is designed for retail investors, fleet operators, infrastructure partners, and institutional investors seeking asset-backed exposure to India's clean energy and mobility transition. Tickets start at Rs 1,500, making fractional ownership of critical infrastructure accessible to a wide range of investors.",
    },
    {
      q: "What are the payment methods accepted?",
      a: "ZipAsset supports multiple payment modes. Specific payment details are provided at the checkout stage within the investment studio. All transactions are processed through secure payment gateways.",
    },
    {
      q: "How do I get support?",
      a: "You can reach our support team at info@zip-bolt.com or use the Contact form on the website. We aim to respond to all inquiries within 24 business hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1480px,calc(100%-22px))] md:w-[min(1480px,calc(100%-32px))]">
        <section className="hero-panel hero-panel-zip overflow-visible lg:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              FAQ
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Everything you need to know about investing in EV charging
              infrastructure with ZipAsset.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-white/10 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 transition transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#8595;
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-[#dbe4ff] bg-white p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2a56c6]">
              Still have questions?
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              If you didn't find the answer you're looking for, feel free to
              reach out using the Contact form or email us directly at{" "}
              <a href="mailto:info@zip-bolt.com" className="text-[#2a56c6] font-semibold hover:underline">
                info@zip-bolt.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FAQPage;
