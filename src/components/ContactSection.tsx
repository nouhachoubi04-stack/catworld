import { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ContactSectionProps {
  language: Language;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection({ language }: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    subject: string;
  } | null>(null);

  const t = TRANSLATIONS[language];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = t.contact.errName;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = t.contact.errEmail;
    }
    if (subject.trim().length < 3) {
      nextErrors.subject = t.contact.errSubject;
    }
    if (message.trim().length < 15) {
      nextErrors.message = t.contact.errMessage;
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData({
      fullName: fullName.trim(),
      subject: subject.trim(),
    });
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20 bg-[#F2ECE1] dark:bg-[#1C1714] border-t border-[#E3D9C8] dark:border-[#362C27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Editorial Intro & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
                {t.contact.kicker}
              </p>
              <h2
                id="contact-heading"
                className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance"
              >
                {t.contact.title}
              </h2>
              <p className="mt-3 text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#DFD5C5] dark:border-[#362C27]">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D96B27] dark:text-[#EA823E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {t.contact.editorialDesk}
                  </div>
                  <div dir="ltr" className="text-sm text-[#6B574C] dark:text-[#B8A89A]">
                    hello@catworld-archive.org
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D96B27] dark:text-[#EA823E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {t.contact.collectiveTitle}
                  </div>
                  <div className="text-sm text-[#6B574C] dark:text-[#B8A89A]">
                    {t.contact.collectiveCities}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DFD5C5] dark:border-[#362C27]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7D6659] dark:text-[#A39284]">
                {t.contact.followCommunity}
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {[
                  { label: 'Instagram', href: 'https://instagram.com' },
                  { label: 'YouTube', href: 'https://youtube.com' },
                  { label: 'Pinterest', href: 'https://pinterest.com' },
                  { label: 'X / Twitter', href: 'https://x.com' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#3A2F29] hover:border-[#D96B27] text-xs font-semibold text-[#4A382E] dark:text-[#F5EFE6] transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
              {submittedData ? (
                <div
                  role="status"
                  className="py-8 text-center max-w-md mx-auto space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D96B27]/15 text-[#D96B27] dark:text-[#EA823E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                    {t.contact.successBody(submittedData.fullName, submittedData.subject)}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#BF5819] text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {Object.keys(errors).length > 0 && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2.5 text-xs text-red-800 dark:text-red-200"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{t.contact.errorSummary}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-fullname"
                        className="block text-xs font-semibold text-[#4A382E] dark:text-[#E5D8CB] mb-1.5"
                      >
                        {t.contact.fullName}
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder={t.contact.fullNamePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-[#D9CEBC] dark:border-[#3A2F29] focus:border-[#D96B27]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#4A382E] dark:text-[#E5D8CB] mb-1.5"
                      >
                        {t.contact.emailAddress}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder={t.contact.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none ${
                          errors.email
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-[#D9CEBC] dark:border-[#3A2F29] focus:border-[#D96B27]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-[#4A382E] dark:text-[#E5D8CB] mb-1.5"
                    >
                      {t.contact.subject}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder={t.contact.subjectPlaceholder}
                      aria-invalid={Boolean(errors.subject)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-[#D9CEBC] dark:border-[#3A2F29] focus:border-[#D96B27]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#4A382E] dark:text-[#E5D8CB] mb-1.5"
                    >
                      {t.contact.message}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder={t.contact.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none resize-y ${
                        errors.message
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-[#D9CEBC] dark:border-[#3A2F29] focus:border-[#D96B27]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D96B27] hover:bg-[#BF5819] text-white font-semibold text-sm transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {t.contact.sendMessage}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
