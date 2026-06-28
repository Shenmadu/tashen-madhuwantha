import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please execute mandatory form fields (Name, Email, Message).");
      return;
    }

    setSending(true);
    setErrorText(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Contact transmission failed.");
      }

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setErrorText(err.message || "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  const contactInfos = [
    { id: 'mail', label: 'E-mail Inquiries', val: 'tashen.madu@gmail.com', icon: <Mail className="w-4 h-4 text-[#6366F1]" /> },
    { id: 'phone', label: 'Direct Hotline', val: '+94 71 999 7732', icon: <Phone className="w-4 h-4 text-[#8B5CF6]" /> },
    { id: 'loc', label: 'Office Base', val: 'Colombo, Sri Lanka', icon: <MapPin className="w-4 h-4 text-[#06B6D4]" /> },
    { id: 'tz', label: 'Working Timezone', val: 'UTC +05:30 (Col)', icon: <Clock className="w-4 h-4 text-[#34D399]" /> }
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0B0B0F]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-[#06B6D4] tracking-widest uppercase">07 / PROJECT INITIATION</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Let's Collaborate
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#06B6D4] to-[#6366F1] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Multi-tier communication grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Direct details */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            <div className="space-y-4 text-left">
              <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                Connect Directly
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-lg">
                Enter your project metrics in the styled contact sheet on the right, or reach out directly using the contact details below to initiate our collaboration!
              </p>

              {/* Badges block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {contactInfos.map(info => (
                  <div key={info.id} className="p-4 bg-white/2.5 border border-white/5 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 shrink-0 shadow-sm">
                      {info.icon}
                    </div>
                    <div className="text-left font-sans">
                      <span className="block text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-0.5">{info.label}</span>
                      <a
                        href={info.id === 'mail' ? `mailto:${info.val}` : undefined}
                        className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                      >
                        {info.val}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Stylish Contact Form */}
          <div className="lg:col-span-6 p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col justify-center text-left relative overflow-hidden backdrop-blur-md">
            <span className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#8B5CF6]/10 blur-[40px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-[#06B6D4] tracking-widest uppercase">SECTION 01 / PROFILE</span>
                    <h4 className="font-sans text-base font-bold text-white tracking-tight">Drop a secure package transmission</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-white/40 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full bg-[#0B0B0F]/50 border border-white/10 hover:border-white/20 focus:border-[#6366F1] rounded-xl py-2.5 px-4 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#6366F1]/50 text-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] tracking-wider text-white/40 uppercase">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full bg-[#0B0B0F]/50 border border-white/10 hover:border-white/20 focus:border-[#6366F1] rounded-xl py-2.5 px-4 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#6366F1]/50 text-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-white/40 uppercase">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="SaaS / Cloud / Full Stack Consultation"
                      className="w-full bg-[#0B0B0F]/50 border border-white/10 hover:border-white/20 focus:border-[#6366F1] rounded-xl py-2.5 px-4 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#6366F1]/50 text-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-white/40 uppercase">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Detail your requirements here..."
                      className="w-full bg-[#0B0B0F]/50 border border-white/10 hover:border-white/20 focus:border-[#6366F1] rounded-xl py-2.5 px-4 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#6366F1]/50 text-white transition-colors resize-none"
                    />
                  </div>

                  {errorText && (
                    <div className="p-3 bg-red-500/5 border border-red-500/10 text-red-400 text-xs rounded-xl flex items-center gap-2">
                      <span>{errorText}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-sans text-xs font-semibold tracking-wider hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-[0_5px_15px_rgba(99,102,241,0.2)] disabled:opacity-50"
                  >
                    {sending ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Transmit Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-sans text-lg font-bold text-white tracking-tight">Transmission Accomplished</h4>
                    <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm">
                      Your query has been logged securely into our telemetry stack. Tashen will reach back to you within 24 operational business hours. Thank you!
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-semibold tracking-wider border border-white/10 active:scale-95 transition-all cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}