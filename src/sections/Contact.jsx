import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
import social from "../data/social";
import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1800);
    };

    return (
        <section
            id="contact"
            className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 relative overflow-hidden"
        >
            {/* Background Accent Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <SectionTitle
                    title="Let's Connect"
                    subtitle="Have an opportunity, a question, or want to collaborate? Drop me a message!"
                />

                <div className="grid lg:grid-cols-12 gap-12 mt-12">
                    
                    {/* Left Side: Contact Information - Span 5 */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>

                            {/* Email Card */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
                                        Email Me
                                    </h4>
                                    <a
                                        href={`mailto:${social.email}`}
                                        className="text-white hover:text-cyan-400 text-base font-medium break-all mt-1 block transition"
                                    >
                                        {social.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
                                        Location
                                    </h4>
                                    <p className="text-white text-base font-medium mt-1">
                                        {profile.location}
                                    </p>
                                </div>
                            </div>

                            {/* LinkedIn Card */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                    <FaLinkedin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
                                        LinkedIn
                                    </h4>
                                    <a
                                        href={social.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white hover:text-cyan-400 text-base font-medium mt-1 block transition"
                                    >
                                        linkedin.com/in/amar8921
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Interactive prompt */}
                        <div className="bg-gradient-to-r from-cyan-950/20 to-indigo-950/20 border border-slate-800/60 rounded-3xl p-8 text-center">
                            <p className="text-slate-350 text-sm leading-relaxed">
                                I'm actively looking for junior or trainee opportunities in <strong>Python Backend, Data Engineering, and MLOps</strong>!
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Message Form - Span 7 */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 space-y-6 relative overflow-hidden"
                            noValidate
                        >
                            {/* Form Input: Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-slate-300 text-sm font-semibold">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`bg-slate-950 border rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-200 ${
                                        errors.name ? "border-rose-500" : "border-slate-800 focus:border-cyan-500"
                                    }`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <span className="text-rose-500 text-xs font-medium">{errors.name}</span>
                                )}
                            </div>

                            {/* Form Input: Email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-slate-300 text-sm font-semibold">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`bg-slate-950 border rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-200 ${
                                        errors.email ? "border-rose-500" : "border-slate-800 focus:border-cyan-500"
                                    }`}
                                    placeholder="johndoe@example.com"
                                />
                                {errors.email && (
                                    <span className="text-rose-500 text-xs font-medium">{errors.email}</span>
                                )}
                            </div>

                            {/* Form Input: Subject */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-slate-300 text-sm font-semibold">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`bg-slate-950 border rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-200 ${
                                        errors.subject ? "border-rose-500" : "border-slate-800 focus:border-cyan-500"
                                    }`}
                                    placeholder="Job Opportunity / Collaboration"
                                />
                                {errors.subject && (
                                    <span className="text-rose-500 text-xs font-medium">{errors.subject}</span>
                                )}
                            </div>

                            {/* Form Input: Message */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-slate-300 text-sm font-semibold">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`bg-slate-950 border rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-200 resize-none ${
                                        errors.message ? "border-rose-500" : "border-slate-800 focus:border-cyan-500"
                                    }`}
                                    placeholder="Tell me about your project or role..."
                                ></textarea>
                                {errors.message && (
                                    <span className="text-rose-500 text-xs font-medium">{errors.message}</span>
                                )}
                            </div>

                            {/* Submit Button & Notification Container */}
                            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane size={14} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {submitSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-emerald-400 text-sm font-semibold"
                                        >
                                            <FaCheckCircle size={18} />
                                            Message sent successfully!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Contact;