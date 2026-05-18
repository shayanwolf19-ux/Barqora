// // "use client";

// // import { useState } from "react";
// // import { Mail, Phone, MapPin, Send } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { toast } from "sonner";

// // const Contact = () => {
// //   const [form, setForm] = useState({ name: "", email: "", message: "" });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     toast.success("Message sent! We'll get back to you within 24 hours.");
// //     setForm({ name: "", email: "", message: "" });
// //   };

// //   return (
// //     <section id="contact" className="py-32 relative">
// //       <div className="container mx-auto px-6">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-16">
// //             <span className="text-sm font-medium text-blue-300 uppercase tracking-widest">Let's talk</span>
// //             <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
// //               Ready to <span className="text-gradient">grow?</span>
// //             </h2>
// //             <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
// //               Tell us about your project. We'll reply within 24 hours with next steps.
// //             </p>
// //           </div>

// //           <div className="grid lg:grid-cols-5 gap-8">
// //             <div className="lg:col-span-2 space-y-4">
// //               {[
// //                 { icon: Mail, title: "Email us", value: "hello@barqora.com" },
// //                 { icon: Phone, title: "Call us", value: "+1 (555) 234-9911" },
// //                 { icon: MapPin, title: "Visit", value: "Dubai · London · Remote" },
// //               ].map((c) => (
// //                 <div key={c.title} className="glass rounded-2xl p-6 flex items-center gap-4">
// //                   <div className="p-3 rounded-xl bg-gradient-primary shadow-glow">
// //                     <c.icon className="h-5 w-5 text-primary-foreground" />
// //                   </div>
// //                   <div>
// //                     <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.title}</div>
// //                     <div className="font-medium mt-1">{c.value}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <form onSubmit={handleSubmit} className="lg:col-span-3 glass glow-border rounded-3xl p-8 md:p-10 space-y-5">
// //               <div>
// //                 <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">Your name</label>
// //                 <Input
// //                   id="name"
// //                   required
// //                   value={form.name}
// //                   onChange={(e) => setForm({ ...form, name: e.target.value })}
// //                   className="bg-muted/50 border-border h-12"
// //                   placeholder="Jane Doe"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">Email</label>
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   required
// //                   value={form.email}
// //                   onChange={(e) => setForm({ ...form, email: e.target.value })}
// //                   className="bg-muted/50 border-border h-12"
// //                   placeholder="jane@brand.com"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">Tell us about your project</label>
// //                 <Textarea
// //                   id="message"
// //                   required
// //                   rows={5}
// //                   value={form.message}
// //                   onChange={(e) => setForm({ ...form, message: e.target.value })}
// //                   className="bg-muted/50 border-border resize-none"
// //                   placeholder="We're looking to grow our brand..."
// //                 />
// //               </div>
// //               <Button type="submit" variant="hero" size="lg" className="w-full">
// //                 Send Message <Send className="ml-2 h-4 w-4" />
// //               </Button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
// "use client";

// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Something went wrong");
//       }

//       toast.success("Message sent! We'll get back to you within 24 hours.");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       toast.error(
//         err instanceof Error
//           ? err.message
//           : "Failed to send message. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-32 relative">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">Let's talk</span>
//             <h2 className="font-display text-4xl md:text-6xl font-bold mt-4" data-aos="fade-up">
//               Ready to <span className="text-gradient">grow?</span>
//             </h2>
//             <p className="text-muted-foreground mt-5 max-w-xl mx-auto" data-aos="fade-up">
//               Tell us about your project. We'll reply within 24 hours with next steps.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-5 gap-8">
//             <div className="lg:col-span-2 space-y-4">
//               {[
//                 { icon: Mail, title: "Email us", value: "info.barqora@gmail.com" },
//                 { icon: Phone, title: "Call us", value: "+1 (555) 234-9911" },
//                 { icon: MapPin, title: "Visit", value: "Sines,Nust H-12 Sector Islamabad " },
//               ].map((c) => (
//                 <div key={c.title} className="glass rounded-2xl p-6 flex items-center gap-4">
//                   <div className="p-3 rounded-xl bg-gradient-primary shadow-glow">
//                     <c.icon className="h-5 w-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.title}</div>
//                     <div className="font-medium mt-1">{c.value}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <form onSubmit={handleSubmit} className="lg:col-span-3 glass glow-border rounded-3xl p-8 md:p-10 space-y-5">
//               <div>
//                 <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">Your name</label>
//                 <Input
//                   id="name"
//                   required
//                   disabled={loading}
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="bg-muted/50 border-border h-12"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">Email</label>
//                 <Input
//                   id="email"
//                   type="email"
//                   required
//                   disabled={loading}
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="bg-muted/50 border-border h-12"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">Tell us about your project</label>
//                 <Textarea
//                   id="message"
//                   required
//                   disabled={loading}
//                   rows={5}
//                   value={form.message}
//                   onChange={(e) => setForm({ ...form, message: e.target.value })}
//                   className="bg-muted/50 border-border resize-none"
//                   placeholder="Tell us about your project..."
//                 />
//               </div>
//               <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
//                 {loading ? (
//                   <>Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
//                 ) : (
//                   <>Send Message <Send className="ml-2 h-4 w-4" /></>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Map is client-only — never server-rendered
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
      Loading map…
    </div>
  ),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">Let's talk</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4" data-aos="fade-up">
              Ready to <span className="text-gradient">grow?</span>
            </h2>
            <p className="text-muted-foreground mt-5 max-w-xl mx-auto" data-aos="fade-up">
              Tell us about your project. We'll reply within 24 hours with next steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map replaces the info cards */}
            <div className="lg:col-span-2">
              <div className="glass glow-border rounded-xl overflow-hidden h-[400px] lg:h-full lg:min-h-full">
                <LeafletMap />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 glass glow-border rounded-xl p-8 md:p-10 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">Your name</label>
                <Input
                  id="name"
                  required
                  disabled={loading}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-muted/50 border-border h-12"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">Email</label>
                <Input
                  id="email"
                  type="email"
                  required
                  disabled={loading}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-muted/50 border-border h-12"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">Tell us about your project</label>
                <Textarea
                  id="message"
                  required
                  disabled={loading}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-muted/50 border-border resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <>Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;