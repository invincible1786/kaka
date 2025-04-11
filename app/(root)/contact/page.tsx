'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [success, setSuccess] = useState(false);
    const router = useRouter(); // <-- required for router.push

    useEffect(() => {
        setTimeout(() => setAnimate(true), 300);
    }, []);

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
        if (!form.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => formData.append(key, value));

        try {
            const response = await fetch('https://getform.io/f/ayvkwkpb', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                setSuccess(true);
                setTimeout(() => router.push('/'), 2000);
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden relative py-2 sm:py-4 md:py-8 lg:py-16" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute left-5 top-0 w-0.5 sm:w-1 h-1/2 bg-white animate-move-up"
                    style={{ 
                        transform: `translateY(-61vh)`, 
                        left: `${(i * 10) + 5}%`, 
                        height: '40vh', 
                        animationDelay: `${i * 1000}ms` 
                    }}
                ></div>
            ))}
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute right-5 bottom-0 w-0.5 sm:w-1 h-1/2 bg-white animate-move-down"
                    style={{ 
                        transform: `translateY(61vh)`, 
                        right: `${(i * 10) + 5}%`, 
                        height: '40vh', 
                        animationDelay: `${i * 1000}ms` 
                    }}
                ></div>
            ))}
            {[...Array(5)].map((_, i) => (
                <div 
                    key={`h-top-${i}`} 
                    className="absolute top-5 left-0 h-0.5 sm:h-1 w-1/2 bg-white animate-move-left"
                    style={{ 
                        transform: `translateX(-50vw)`, 
                        top: `${(i * 8) + 5}%`, 
                        width: '40vw', 
                        animationDelay: `${i * 1000}ms` 
                    }}
                ></div>
            ))}
            {[...Array(5)].map((_, i) => (
                <div 
                    key={`h-bottom-${i}`} 
                    className="absolute bottom-5 right-0 h-0.5 sm:h-1 w-1/2 bg-white animate-move-right"
                    style={{ 
                        transform: `translateX(50vw)`, 
                        bottom: `${(i * 8) + 5}%`, 
                        width: '40vw', 
                        animationDelay: `${i * 1000}ms` 
                    }}
                ></div>
            ))}

            <div className="max-w-2xl w-full mx-2 sm:mx-4 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 sm:border-4 border-white duration-1000 transform transition-opacity ease-in-out delay-300 opacity-100">
                <motion.h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center"
                    variants={{
                        hidden: { opacity: 0, y: -60 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                    Contact Us
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className={`transition-transform duration-500 ease-out ${animate ? 'translate-x-0' : '-translate-x-[100%]'}`}>
                        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded bg-black text-white border-2 border-white transition duration-300 ease-out" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className={`transition-transform duration-500 ease-out delay-100 ${animate ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 rounded bg-black text-white border-2 border-white transition duration-300 ease-out" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className={`transition-transform duration-500 ease-out delay-200 ${animate ? 'translate-x-0' : '-translate-x-[100%]'}`}>
                        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full p-3 rounded bg-black text-white border-2 border-white transition duration-300 ease-out"></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button type="submit" className={`w-full p-3 rounded bg-white text-black border border-white transition-all duration-500 ease-out delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`} disabled={isSubmitting || success}>
                        {success ? 'Submitted' : (isSubmitting ? 'Sending...' : 'Send Message')}
                    </button>
                </form>
            </div>

            <style jsx>{`
                @keyframes move-up {
                    0% { transform: translateY(-150vh); }
                    100% { transform: translateY(150vh); }
                }
                @keyframes move-down {
                    0% { transform: translateY(150vh); }
                    100% { transform: translateY(-150vh); }
                }
                @keyframes move-left {
                    0% { transform: translateX(-150vw); }
                    100% { transform: translateX(150vw); }
                }
                @keyframes move-right {
                    0% { transform: translateX(150vw); }
                    100% { transform: translateX(-150vw); }
                }
                .animate-move-up {
                    animation: move-up 12s linear infinite;
                }
                .animate-move-down {
                    animation: move-down 12s linear infinite;
                }
                .animate-move-left {
                    animation: move-left 15s linear infinite;
                }
                .animate-move-right {
                    animation: move-right 15s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default ContactUs;
