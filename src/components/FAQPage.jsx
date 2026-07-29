import { useState } from "react";

function FAQPage() {
  const faqs = [
    {
      q: "What is ZipInvest?",
      a: "ZipInvest is a marketplace-style platform for investing in EV DC fast charging infrastructure across retail, fleet, and highway locations in India. You can own fractional shares of revenue-generating charging assets with clear return profiles.",
    },
    {
      q: "How does fractional investment work?",
      a: "Instead of buying an entire charger, you can invest a minimum ticket starting at Rs 1,500. Your investment is pooled with others to fund site-level infrastructure, and you earn proportional returns based on the charger's utilization and yield rate.",
    },
    {
      q: "What are the risk levels of different charger classes?",
      a: "Chargers are categorized into three risk tiers: Low Risk (6 kW AC, 12 kW AC, 30 kW Urban), Medium Risk (60 kW Retail, 120 kW Highway, 180 kW Ultra-Fast), and High Risk (240 kW Flagship, 350 kW Mega-Fast). Each tier has different yield expectations and lock periods.",
    },
    {
      q: "What is the expected return?",
      a: "APY ranges from 9.5% for entry-level AC chargers to 19.5% for mega-fast stations. Returns depend on site utilization, power output, and energy pricing. Actual returns may vary based on operational performance.",
    },
    {
      q: "What is the lock period?",
      a: "Each charger class has a defined lock period ranging from 45 days (6 kW AC) to 210 days (350 kW Mega-Fast). During the lock period, your investment is deployed and generating returns. Early withdrawal is not supported.",
    },
    {
      q: "How do I invest?",
      a: "Browse charger opportunities on the Marketplace, use the Investment Simulator to model returns, review the risk profile, and then deploy your allocation. You can also use the Investment Simulator to preview daily and monthly return estimates.",
    },
    {
      q: "Is my investment secure?",
      a: "Every investment is tied to physical hardware deployed at a specific site with real host-site contracts and transparent utilization monitoring. However, as with any infrastructure investment, there are inherent risks including utilization variability, grid dependencies, and maintenance considerations.",
    },
    {
      q: "Who is ZipInvest for?",
      a: "ZipInvest is designed for retail investors, fleet operators, infrastructure partners, and institutional investors looking for asset-backed exposure to India's growing EV charging infrastructure. Tickets start at Rs 1,500, making it accessible to a wide range of investors.",
    },
    {
      q: "What are the payment methods accepted?",
      a: "ZipInvest supports multiple payment modes. Specific payment details are provided at the checkout stage within the investment studio. All transactions are processed through secure payment gateways.",
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
              infrastructure with ZipInvest.
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