import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const eventOptions = [
  '60m', '100m', '200m', '300m', '400m', '800m',
  '100mH', '110mH', '300mH', '400mH',
  'Long Jump', 'Triple Jump', 'High Jump', 'Pole Vault',
  'Shot Put', 'Discus', 'Javelin',
];

const hearAboutOptions = [
  'Instagram / Social Media',
  'Word of Mouth / Referral',
  'Coach / Team Recommendation',
  'MileSplit / Athletic.net',
  'News Article / Press',
  'At a Meet',
  'Other',
];

interface FormData {
  // Step 1
  athleteName: string;
  dob: string;
  school: string;
  classYear: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  // Step 2
  events: string[];
  prs: Record<string, string>;
  currentClub: string;
  videoLink: string;
  profileUrl: string;
  // Step 3
  goals: string;
  targetColleges: string;
  hearAbout: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  athleteName: '',
  dob: '',
  school: '',
  classYear: '',
  parentName: '',
  parentEmail: '',
  parentPhone: '',
  events: [],
  prs: {},
  currentClub: '',
  videoLink: '',
  profileUrl: '',
  goals: '',
  targetColleges: '',
  hearAbout: '',
  additionalInfo: '',
};

export default function Apply() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleEvent = (event: string) => {
    setForm(prev => {
      const events = prev.events.includes(event)
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event];
      const prs = { ...prev.prs };
      if (!events.includes(event)) delete prs[event];
      return { ...prev, events, prs };
    });
  };

  const updatePR = (event: string, value: string) => {
    setForm(prev => ({
      ...prev,
      prs: { ...prev.prs, [event]: value },
    }));
  };

  const handleSubmit = () => {
    try {
      const submissions = JSON.parse(localStorage.getItem('apxp-applications') || '[]');
      submissions.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem('apxp-applications', JSON.stringify(submissions));
    } catch {
      // silently fail for demo
    }
    setSubmitted(true);
  };

  const canAdvance = () => {
    if (step === 1) return form.athleteName && form.parentEmail && form.school;
    if (step === 2) return form.events.length > 0;
    return true;
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-purple-deep flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg text-center"
        >
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-purple-deep text-3xl">✓</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl uppercase text-white mb-4">
            Application Received
          </h1>
          <p className="font-body text-lg text-white/60 leading-relaxed">
            Coach McCray will review your application and follow up within 7 days.
            Thank you for your interest in APXP Speed Development.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main>
      {/* Header */}
      <div className="bg-purple-deep pt-28 pb-10">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-2">
            Application
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl uppercase text-white leading-none mb-4">
            Join APXP
          </h1>
          <p className="font-body text-base text-white/50">
            Step {step} of 3
          </p>

          {/* Progress bar */}
          <div className="mt-4 h-1 bg-white/10 rounded overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-surface-light py-12 md:py-16 min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="font-display font-bold text-2xl uppercase text-text-dark mb-6">
                  Athlete Information
                </h2>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Athlete Name *
                  </label>
                  <input
                    type="text"
                    value={form.athleteName}
                    onChange={e => updateField('athleteName', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={form.dob}
                      onChange={e => updateField('dob', e.target.value)}
                      className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                      Class Year
                    </label>
                    <select
                      value={form.classYear}
                      onChange={e => updateField('classYear', e.target.value)}
                      className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    School *
                  </label>
                  <input
                    type="text"
                    value={form.school}
                    onChange={e => updateField('school', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    placeholder="Current school"
                  />
                </div>

                <hr className="border-gray-200 my-6" />
                <h3 className="font-display font-bold text-lg uppercase text-text-dark">
                  Parent / Guardian
                </h3>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.parentName}
                    onChange={e => updateField('parentName', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.parentEmail}
                      onChange={e => updateField('parentEmail', e.target.value)}
                      className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.parentPhone}
                      onChange={e => updateField('parentPhone', e.target.value)}
                      className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="font-display font-bold text-2xl uppercase text-text-dark mb-6">
                  Athletic Profile
                </h2>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-3">
                    Primary Events * (select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {eventOptions.map(event => (
                      <button
                        key={event}
                        onClick={() => toggleEvent(event)}
                        className={`font-display text-sm font-semibold tracking-wider uppercase px-4 py-2 border-2 transition-all cursor-pointer ${
                          form.events.includes(event)
                            ? 'bg-purple-dark text-white border-purple-dark'
                            : 'bg-white text-text-muted border-gray-200 hover:border-purple-mid'
                        }`}
                      >
                        {event}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic PR fields */}
                {form.events.length > 0 && (
                  <div>
                    <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-3">
                      Current PRs
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {form.events.map(event => (
                        <div key={event}>
                          <span className="font-display text-xs font-semibold text-purple-dark block mb-1">
                            {event}
                          </span>
                          <input
                            type="text"
                            value={form.prs[event] || ''}
                            onChange={e => updatePR(event, e.target.value)}
                            className="w-full font-body text-sm border-2 border-gray-200 focus:border-purple-dark outline-none px-3 py-2 bg-white transition-colors"
                            placeholder="e.g., 10.50"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Current Club / Team
                  </label>
                  <input
                    type="text"
                    value={form.currentClub}
                    onChange={e => updateField('currentClub', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    placeholder="If currently with another club"
                  />
                </div>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Highlight Video Link
                  </label>
                  <input
                    type="url"
                    value={form.videoLink}
                    onChange={e => updateField('videoLink', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    placeholder="YouTube, Hudl, etc."
                  />
                </div>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Athletic.net or MileSplit Profile URL
                  </label>
                  <input
                    type="url"
                    value={form.profileUrl}
                    onChange={e => updateField('profileUrl', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    placeholder="Link to your profile"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="font-display font-bold text-2xl uppercase text-text-dark mb-6">
                  Goals & Fit
                </h2>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    What are your goals for the next 1-2 years?
                  </label>
                  <textarea
                    value={form.goals}
                    onChange={e => updateField('goals', e.target.value)}
                    rows={4}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors resize-none"
                    placeholder="Specific times, championships, college goals..."
                  />
                </div>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Target Colleges
                  </label>
                  <input
                    type="text"
                    value={form.targetColleges}
                    onChange={e => updateField('targetColleges', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                    placeholder="Schools you're interested in"
                  />
                </div>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    How did you hear about APXP?
                  </label>
                  <select
                    value={form.hearAbout}
                    onChange={e => updateField('hearAbout', e.target.value)}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors"
                  >
                    <option value="">Select</option>
                    {hearAboutOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-display text-xs font-bold tracking-widest uppercase text-text-muted block mb-1.5">
                    Anything else Coach McCray should know?
                  </label>
                  <textarea
                    value={form.additionalInfo}
                    onChange={e => updateField('additionalInfo', e.target.value)}
                    rows={3}
                    className="w-full font-body text-base border-2 border-gray-200 focus:border-purple-dark outline-none px-4 py-3 bg-white transition-colors resize-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-10">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="font-display text-sm font-bold tracking-widest uppercase text-purple-dark hover:text-purple-mid transition-colors bg-transparent border-2 border-purple-dark/20 px-6 py-3 cursor-pointer"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={() => canAdvance() && setStep(step + 1)}
                disabled={!canAdvance()}
                className={`font-display text-sm font-bold tracking-widest uppercase px-8 py-3 transition-all cursor-pointer border-none ${
                  canAdvance()
                    ? 'bg-purple-dark text-white hover:bg-purple-mid'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="font-display text-sm font-bold tracking-widest uppercase bg-gold text-purple-deep px-10 py-3 hover:bg-gold-bright transition-all cursor-pointer border-none hover:scale-105"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
