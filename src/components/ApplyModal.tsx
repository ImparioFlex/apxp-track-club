import { useState, useEffect } from 'react';
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
  athleteName: string;
  dob: string;
  school: string;
  classYear: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  message: string;
  events: string[];
  prs: Record<string, string>;
  currentClub: string;
  videoLink: string;
  profileUrl: string;
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
  message: '',
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

const inputClass = "w-full font-body text-base border-2 border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none px-4 py-3 bg-white transition-all";
const labelClass = "font-display text-sm font-bold tracking-widest uppercase text-text-muted block mb-1.5";

export default function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
    setForm(prev => ({ ...prev, prs: { ...prev.prs, [event]: value } }));
  };

  const handleSubmit = () => {
    try {
      const submissions = JSON.parse(localStorage.getItem('apxp-applications') || '[]');
      submissions.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem('apxp-applications', JSON.stringify(submissions));
    } catch { /* demo */ }
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setForm(initialFormData);
      setSubmitted(false);
    }, 300);
  };

  const canAdvance = () => {
    if (step === 1) return form.athleteName && form.parentEmail && form.school;
    if (step === 2) return form.events.length > 0;
    return true;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 md:p-8"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-purple-deep/90 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-sm shadow-2xl shadow-purple-deep/50"
          >
            {/* Yellow top accent bar */}
            <div className="h-1.5 bg-gold w-full" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-text-muted hover:text-purple-dark transition-colors bg-transparent border-none cursor-pointer text-2xl z-10"
              aria-label="Close"
            >
              ×
            </button>

            {submitted ? (
              <div className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-deep text-3xl">✓</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl uppercase text-text-dark mb-4">
                  Application Received
                </h2>
                <p className="font-body text-lg text-text-muted leading-relaxed mb-8">
                  Coach McCray will review your application and follow up within 7 days.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleClose}
                    className="font-display text-base font-bold tracking-widest uppercase bg-gold text-purple-deep px-8 py-3 hover:bg-gold-bright transition-all cursor-pointer border-none"
                  >
                    Done
                  </button>
                  <a
                    href="https://www.instagram.com/i_coach_speed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-base font-bold tracking-widest uppercase text-purple-dark border-2 border-purple-dark/20 px-6 py-3 hover:border-gold hover:text-gold-dim transition-colors no-underline text-center"
                  >
                    Follow @i_coach_speed
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="mb-6">
                  <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-1">
                    Application
                  </p>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase text-text-dark leading-none">
                    Join APXP
                  </h2>
                  <div className="flex items-center gap-3 mt-4">
                    {[1, 2, 3].map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all ${
                          s === step ? 'bg-gold text-purple-deep' :
                          s < step ? 'bg-purple-dark text-white' :
                          'bg-gray-200 text-gray-400'
                        }`}>
                          {s < step ? '✓' : s}
                        </div>
                        {s < 3 && <div className={`w-8 h-0.5 ${s < step ? 'bg-purple-dark' : 'bg-gray-200'}`} />}
                      </div>
                    ))}
                    <span className="font-display text-sm tracking-wider uppercase text-text-muted ml-2">
                      {step === 1 ? 'Info' : step === 2 ? 'Athletic' : 'Goals'}
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className={labelClass}>Athlete Name *</label>
                        <input type="text" value={form.athleteName} onChange={e => updateField('athleteName', e.target.value)} className={inputClass} placeholder="Full name" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Date of Birth</label>
                          <input type="date" value={form.dob} onChange={e => updateField('dob', e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Class Year</label>
                          <select value={form.classYear} onChange={e => updateField('classYear', e.target.value)} className={inputClass}>
                            <option value="">Select</option>
                            {[2026, 2027, 2028, 2029, 2030].map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>School *</label>
                        <input type="text" value={form.school} onChange={e => updateField('school', e.target.value)} className={inputClass} placeholder="Current school" />
                      </div>

                      <div className="border-t border-gray-200 pt-5">
                        <h3 className="font-display font-bold text-xl uppercase text-text-dark mb-4">Parent / Guardian</h3>
                      </div>

                      <div>
                        <label className={labelClass}>Name</label>
                        <input type="text" value={form.parentName} onChange={e => updateField('parentName', e.target.value)} className={inputClass} />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Email *</label>
                          <input type="email" value={form.parentEmail} onChange={e => updateField('parentEmail', e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Phone</label>
                          <input type="tel" value={form.parentPhone} onChange={e => updateField('parentPhone', e.target.value)} className={inputClass} />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Message for Coach McCray</label>
                        <textarea
                          value={form.message}
                          onChange={e => updateField('message', e.target.value)}
                          rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Introduce yourself, ask a question, or tell us why you're interested in APXP..."
                        />
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
                      <div>
                        <label className={`${labelClass} mb-3`}>Primary Events * (select all that apply)</label>
                        <div className="flex flex-wrap gap-2">
                          {eventOptions.map(event => (
                            <button
                              key={event}
                              onClick={() => toggleEvent(event)}
                              className={`font-display text-sm font-semibold tracking-wider uppercase px-4 py-2.5 border-2 transition-all cursor-pointer ${
                                form.events.includes(event)
                                  ? 'bg-gold text-purple-deep border-gold'
                                  : 'bg-white text-text-muted border-gray-200 hover:border-gold/50'
                              }`}
                            >
                              {event}
                            </button>
                          ))}
                        </div>
                      </div>

                      {form.events.length > 0 && (
                        <div>
                          <label className={`${labelClass} mb-3`}>Current PRs</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {form.events.map(event => (
                              <div key={event}>
                                <span className="font-display text-sm font-semibold text-purple-dark block mb-1">{event}</span>
                                <input type="text" value={form.prs[event] || ''} onChange={e => updatePR(event, e.target.value)} className={inputClass} placeholder="e.g., 10.50" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <label className={labelClass}>Current Club / Team</label>
                        <input type="text" value={form.currentClub} onChange={e => updateField('currentClub', e.target.value)} className={inputClass} placeholder="If currently with another club" />
                      </div>

                      <div>
                        <label className={labelClass}>Highlight Video Link</label>
                        <input type="url" value={form.videoLink} onChange={e => updateField('videoLink', e.target.value)} className={inputClass} placeholder="YouTube, Hudl, etc." />
                      </div>

                      <div>
                        <label className={labelClass}>Athletic.net or MileSplit Profile</label>
                        <input type="url" value={form.profileUrl} onChange={e => updateField('profileUrl', e.target.value)} className={inputClass} placeholder="Link to your profile" />
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
                      <div>
                        <label className={labelClass}>What are your goals for the next 1-2 years?</label>
                        <textarea value={form.goals} onChange={e => updateField('goals', e.target.value)} rows={4} className={`${inputClass} resize-none`} placeholder="Specific times, championships, college goals..." />
                      </div>

                      <div>
                        <label className={labelClass}>Target Colleges</label>
                        <input type="text" value={form.targetColleges} onChange={e => updateField('targetColleges', e.target.value)} className={inputClass} placeholder="Schools you're interested in" />
                      </div>

                      <div>
                        <label className={labelClass}>How did you hear about APXP?</label>
                        <select value={form.hearAbout} onChange={e => updateField('hearAbout', e.target.value)} className={inputClass}>
                          <option value="">Select</option>
                          {hearAboutOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>Anything else?</label>
                        <textarea value={form.additionalInfo} onChange={e => updateField('additionalInfo', e.target.value)} rows={3} className={`${inputClass} resize-none`} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="font-display text-base font-bold tracking-widest uppercase text-purple-dark hover:text-purple-mid transition-colors bg-transparent border-2 border-purple-dark/20 px-6 py-3 cursor-pointer"
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
                      className={`font-display text-base font-bold tracking-widest uppercase px-8 py-3 transition-all cursor-pointer border-none ${
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
                      className="font-display text-base font-bold tracking-widest uppercase bg-gold text-purple-deep px-10 py-3 hover:bg-gold-bright transition-all cursor-pointer border-none hover:scale-105"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
