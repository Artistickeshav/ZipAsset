import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", interest: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Failed to send message. Please try again.");
    }
  };

  const successMsg = "Thank you! Your message has been sent successfully. We'll get back to you shortly.";

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1480px,calc(100%-22px))] md:w-[min(1480px,calc(100%-32px))]">
        <section className="hero-panel hero-panel-zip overflow-visible lg:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Get In Touch
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Have questions about EV charging infrastructure investments? Want to explore
              partnership opportunities? Drop us a message and we&apos;ll respond promptly.
            </p>
          </div>

          {status === "success" ? (
            <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-lg font-bold">
                  &#10003;
                </div>
                <div>
                  <div className="font-bold text-emerald-900">Message Sent</div>
                  <p className="mt-1 text-sm leading-7 text-emerald-800">
                    {successMsg}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-2xl" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-900">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-slate-900">
                    I&apos;m Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  >
                    <option value="">Select an option</option>
                    <option value="Investment Opportunity">Investment Opportunity</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-900">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 resize-none"
                  placeholder="Tell us more about what you&apos;re looking for..."
                />
              </div>

              {error && (
                <div className="mt-4 rounded-[16px] border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="primary-button mt-8 w-full justify-center px-6 py-4 text-base"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

export default ContactPage;