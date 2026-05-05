import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ArrowRight, Star, ChevronDown, CheckCircle2, MapPin, Mail, Phone, Users, Hammer, DollarSign, Clock, Heart } from 'lucide-react';
import HeroImage from './Images/hero image.jpg';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { val: "8+", label: "Years in the Industry" },
    { val: "100%", label: "Client Satisfaction" },
    { val: "200+", label: "Completed Projects" },
    { val: "30+", label: "Expert Landscapers" },
  ];

  const services = [
    { title: "Garden Design", desc: "Creating beautiful, functional layouts tailored to your style and space.", duration: "2 Days", price: "100$", img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=800" },
    { title: "Hardscaping", desc: "Creating beautiful, functional layouts tailored to your style and space.", duration: "4 Days", price: "200$", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
    { title: "Planting & Softscaping", desc: "Creating beautiful, functional layouts tailored to your style and space.", duration: "6 Days", price: "800$", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800" },
    { title: "Lawn Care & Maintenance", desc: "Creating beautiful, functional layouts tailored to your style and space.", duration: "5 Days", price: "700$", img: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800" },
    { title: "Irrigation & Drainage", desc: "Creating beautiful, functional layouts tailored to your style and space.", duration: "2 Days", price: "300$", img: "https://images.unsplash.com/photo-1477554193778-9562c28588c0?auto=format&fit=crop&q=80&w=800" },
    { title: "Outdoor Lighting", desc: "Creating beautiful, functional layouts tailored to your style and space.", duration: "1 Days", price: "100$", img: "https://images.unsplash.com/photo-1595841696650-dbf1d5d1c312?auto=format&fit=crop&q=80&w=800" },
  ];

  const features = [
    { title: "Experienced Team", desc: "Skilled designers and horticulturists with years of professional experience.", icon: Users },
    { title: "Tailored Solutions", desc: "Landscaping plans customized to fit your home, style, and budget.", icon: Hammer },
    { title: "Sustainable Practices", desc: "Eco-friendly techniques that preserve the environment and save resources.", icon: Leaf },
    { title: "Affordable Pricing", desc: "Landscaping solutions tailored to your vision and budget.", icon: DollarSign },
    { title: "Reliable Service", desc: "Consistent, on-time project delivery with attention to every detail.", icon: Clock },
    { title: "Customer Satisfaction", desc: "We prioritize your happiness, ensuring every garden exceeds expectations.", icon: Heart },
  ];

  const projects = [
    { title: "Elegant Front Yard Upgrade", desc: "Redesigned the front yard to improve curb appeal using structured hedges, a new lawn, and stone edging. The result is a welcoming, polished entrance that complements the home’s architecture.", tags: ["Curb Appeal", "Planting"], img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Garden Retreat", desc: "Transformed a neglected backyard into a calm, modern retreat with layered planting, a stone patio, and subtle ambient lighting for evening use. The design focuses on low maintenance and year-round appeal.", tags: ["Residential", "Outdoor Living"], img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
    { title: "Sustainable Courtyard Garden", desc: "Created an eco-friendly courtyard using native plants, drought-tolerant groundcover, and a smart drip irrigation system — a lush, water-wise design ideal for small urban spaces.", tags: ["Eco-Friendly", "Irrigation"], img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800" },
  ];

  const faqs = [
    { q: "How long does a typical landscaping project take?", a: "Most projects take between one to three weeks, depending on the size and complexity. We always provide a clear timeline before starting any work." },
    { q: "Do you offer maintenance after installation?", a: "Yes! We provide regular maintenance packages to keep your garden healthy, clean, and thriving all year round." },
    { q: "Can you design a garden for small spaces?", a: "Absolutely. We specialize in maximizing smaller yards and patios, creating functional and beautiful outdoor areas that suit your lifestyle." },
    { q: "What kind of materials do you use?", a: "We use premium plants, stones, and eco-friendly materials sourced from trusted suppliers to ensure lasting quality and sustainability." },
    { q: "How do I get a quote for my project?", a: "You can contact us through the form or email. Once we understand your vision, we’ll send a detailed estimate with design and material options." },
  ];

  return (
    <>
      <nav className={`hero-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="hero-nav-content">
          <div className="hero-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            Greenora
          </div>

          <div className="hero-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X color="#fff" /> : <Menu color="#fff" />}
          </div>

          <div className={`hero-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#works" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>Works</a>
            <a href="#contact" className="hero-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section" style={{ backgroundImage: `url("${HeroImage}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content-inner">
            <FadeIn>
              <div className="hero-badge">
                <div className="hero-stars">
                  <Star size={16} fill="#FACC15" color="#FACC15" />
                  <Star size={16} fill="#FACC15" color="#FACC15" />
                  <Star size={16} fill="#FACC15" color="#FACC15" />
                  <Star size={16} fill="#FACC15" color="#FACC15" />
                  <Star size={16} fill="#FACC15" color="#FACC15" />
                </div>
                <span className="hero-badge-text">100+ 5 Star Rating</span>
              </div>
              <h1 className="hero-title">
                Your trusted partner for<br />exceptional landscaping
              </h1>
              <p className="hero-description">
                We provide complete, reliable, and affordable landscaping solutions across the USA — from design to maintenance, ensuring your outdoor spaces are built to last.
              </p>
              <a href="#contact" className="hero-cta">
                Work with us
                <span className="hero-cta-icon-wrap">
                  <ArrowRight size={18} color="#000000" strokeWidth={2.5} />
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <FadeIn>
            <div className="overline text-gray" style={{ marginBottom: "1rem" }}>(about us)</div>
          </FadeIn>
          <div className="grid-2" style={{ alignItems: "center" }}>
            <FadeIn delay={0.1}>
              <h2 className="h2">Expert Landscaping, Personalized for You</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray" style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
                At Greenora, we create beautiful, functional outdoor spaces with care and expertise. From design to maintenance, our team delivers professional landscaping solutions tailored to your home, ensuring every garden looks its best year-round.
              </p>
              <a href="#contact" className="btn-outline">
                Work with us <ArrowRight size={18} />
              </a>
            </FadeIn>
          </div>

          <div className="grid-4" style={{ marginTop: "4rem" }}>
            {stats.map((st, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="stat-card-dark">
                  <div className="stat-val-dark">{st.val}</div>
                  <div className="stat-label-dark">{st.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <FadeIn>
              <div className="overline text-gray" style={{ marginBottom: "1rem" }}>(services)</div>
              <h2 className="h2" style={{ maxWidth: "500px", marginBottom: "0" }}>Landscaping Solutions Tailored for You</h2>
            </FadeIn>
          </div>

          <div className="grid-3" style={{ gap: "2rem" }}>
            {services.map((srv, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="service-card-new">
                  <img src={srv.img} alt={srv.title} className="service-img" />
                  <div className="service-content-new">
                    <h3 className="h3" style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>{srv.title}</h3>
                    <p className="text-gray" style={{ fontSize: "0.95rem", marginBottom: "2rem" }}>{srv.desc}</p>
                    <div className="service-meta-new">
                      <div className="meta-item">
                        <Clock size={14} />
                        <span>{srv.duration}</span>
                      </div>
                      <div className="meta-divider">|</div>
                      <div className="meta-item">
                        <DollarSign size={14} />
                        <span>{srv.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <FadeIn delay={0.2}>
              <a href="#contact" className="btn-primary-green">
                Book our Services <span className="arrow-circle"><ArrowRight size={16} color="#111" /></span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <FadeIn>
              <div className="overline text-gray" style={{ marginBottom: "1rem" }}>(why us)</div>
              <h2 className="h2" style={{ maxWidth: "400px", marginBottom: "0" }}>Why Home Owners Trust Us</h2>
            </FadeIn>
          </div>
          <div className="grid-3" style={{ gap: "2rem" }}>
            {features.map((ft, idx) => {
              const IconComp = ft.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="feature-card-new">
                    <div className="feature-icon-new">
                      <IconComp color="var(--fg)" size={20} />
                    </div>
                    <h3 className="h3" style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>{ft.title}</h3>
                    <p className="text-gray" style={{ fontSize: "0.95rem" }}>{ft.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="section">
        <div className="container">
          <FadeIn>
            <div className="overline text-gray" style={{ marginBottom: "1rem" }}>(works)</div>
            <h2 className="h2 text-center" style={{ textAlign: "center", marginBottom: "4rem" }}>A Look at Our Completed Projects</h2>
          </FadeIn>

          <div className="grid-3">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <a href="#contact" className="work-card">
                  <img src={proj.img} alt={proj.title} className="work-img" />
                  <div className="work-content">
                    <h3 className="h3" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{proj.title}</h3>
                    <p className="text-gray" style={{ fontSize: "0.9rem" }}>{proj.desc}</p>
                    <div className="work-tags">
                      {proj.tags.map(t => <span key={t} className="work-tag">{t}</span>)}
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ backgroundColor: "#152B1E", color: "var(--white)" }}>
        <div className="container">
          <FadeIn>
            <div className="overline" style={{ color: "var(--green-light)", marginBottom: "2rem", textAlign: "center" }}>(testimonial)</div>
            <h2 className="h1" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", fontWeight: "400" }}>
              "Our backyard has completely transformed into a relaxing green escape. The team’s creativity and attention to detail made all the difference."
            </h2>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>Paul Richards</div>
              <div style={{ color: "var(--green-light)", fontSize: "0.9rem" }}>California, USA</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <FadeIn>
            <div className="overline text-gray text-center" style={{ textAlign: "center", marginBottom: "1rem" }}>(faq)</div>
          </FadeIn>
          <div className="faq-wrap">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="faq-item">
                  <div className="faq-q" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                    <span>{faq.q}</span>
                    <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }}>
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="faq-a">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="section" style={{ backgroundColor: "#f5f5f5", color: "var(--fg)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "4rem" }}>
            <div>
              <div className="overline text-gray" style={{ marginBottom: "1rem" }}>(contact)</div>
              <h2 className="h2" style={{ marginBottom: "4rem", maxWidth: "400px" }}>Let's Talk About Your Project</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                  <div className="contact-icon"><Mail size={20} /></div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem" }}>E-mail</div>
                    <a href="mailto:hello@greenora.com" className="text-gray" style={{ fontSize: "0.9rem" }}>hello@greenora.com</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                  <div className="contact-icon"><Phone size={20} /></div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem" }}>Phone</div>
                    <a href="tel:+15550123456" className="text-gray" style={{ fontSize: "0.9rem" }}>(555) 012-3456</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                  <div className="contact-icon"><MapPin size={20} /></div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem" }}>Office</div>
                    <a href="#" className="text-gray" style={{ fontSize: "0.9rem" }}>1428 Willowbrook Ln, Portland, OR, USA</a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "4rem" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem" }}>Follow Us</div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="contact-form-new">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group-new">
                    <label>Name</label>
                    <input type="text" placeholder="Jane Smith" />
                  </div>
                  <div className="form-group-new">
                    <label>Email</label>
                    <input type="email" placeholder="jane@example.com" />
                  </div>
                  <div className="form-group-new">
                    <label>Phone (optional)</label>
                    <input type="text" placeholder="1 255 525 5252" />
                  </div>
                  <div className="form-group-new">
                    <label>Message</label>
                    <textarea rows="4" placeholder=""></textarea>
                  </div>
                  <button className="btn-primary-green" style={{ width: "100%", padding: "1rem", borderRadius: "0.5rem" }}>Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
