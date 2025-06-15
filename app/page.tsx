"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Star,
  Users,
  Coffee,
  Award,
  CheckCircle,
  ArrowDown,
  Sparkles,
  Rocket,
  Target,
  Clock,
  MessageCircle,
  Globe,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = [
  { name: "React", icon: "⚛️", description: "Building dynamic user interfaces", level: 95 },
  { name: "Next.js", icon: "▲", description: "Full-stack React framework", level: 90 },
  { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework", level: 98 },
  { name: "JavaScript", icon: "⚡", description: "Modern ES6+ development", level: 92 },
  { name: "Framer Motion", icon: "🎭", description: "Smooth animations & interactions", level: 88 },
  { name: "TypeScript", icon: "📘", description: "Type-safe development", level: 85 },
]

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-First Design",
    description:
      "Creating seamless experiences across all devices with mobile-first approach and progressive enhancement.",
    features: ["Touch-friendly UI", "Offline Capabilities", "App-like Experience", "Fast Loading"],
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Speed up your website with advanced optimization techniques and modern development practices.",
    features: ["Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis"],
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "UI/UX Enhancement",
    description: "Transform your ideas into beautiful, intuitive interfaces that users love to interact with.",
    features: ["User Research", "Prototyping", "Animation Design", "Accessibility"],
  },
]

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern shopping experience with Next.js, featuring cart management, payment integration, and responsive design.",
    image: "/ecom.png",
    tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    category: "E-Commerce",
    year: "2024",
    a: 'https://e-commerce-gamma-flax.vercel.app',
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization, user management, and interactive charts.",
    image: "/saas.png",
    tech: ["React", "Framer Motion", "Chart.js", "Node.js"],
    category: "SaaS",
    year: "2024",
    a: 'https://saas-app-ecru-zeta.vercel.app',
  },
  {
    title: "Brainwave Website",
    description: "Animated portfolio showcasing creative work with smooth transitions and optimized performance.",
    image: "/brain.png",
    tech: ["Next.js", "Tailwind", "Framer Motion", "MDX"],
    category: "Portfolio",
    year: "2023",
    a: 'https://brainwave-eight-topaz.vercel.app',
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop functionality and team features.",
    image: "/travel.png",
    tech: ["React", "TypeScript", "Tailwind", "Supabase"],
    category: "Productivity",
    year: "2023",
    a: 'https://travel-ebon-three.vercel.app',
  },
  {
    title: "Real Estate Platform",
    description: "A real estate platform offering verified land listings in Gilgit-Baltistan for residential, commercial, and investment purposes.",
    image: "/real.png",
    tech: ["Next.js", "Tailwind", "Mapbox", "Sanity"],
    category: "Real Estate",
    year: "2024",
    a: 'https://real-estate-teal-nine.vercel.app/',
  },
  {
    title: "Quick Funds",
    description: "Quick Funds is a loan service platform designed to help users access personal, business, or auto loans quickly and efficiently.",
    image: "/quick.png",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Education",
    year: "2023",
    a: 'https://quick-funds-five.vercel.app',
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "/women.jpeg",
    content:
      "Working with this developer was an absolute game-changer for our business. The website they built not only looks stunning but also performs incredibly well. Our conversion rate increased by 40% after the launch!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "/men2.jpeg",
    content:
      "The attention to detail and technical expertise is outstanding. They delivered a complex dashboard that our team uses daily, and the user experience is phenomenal. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "/men1.jpeg",
    content:
      "Not only did they create a beautiful website, but they also optimized it for SEO and performance. Our organic traffic doubled within 3 months. The ROI has been incredible!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "StartupXYZ",
    image: "/men3.jpeg",
    content:
      "Professional, reliable, and incredibly talented. They understood our vision perfectly and brought it to life with modern technologies. The project was delivered on time and exceeded expectations.",
    rating: 5,
  },
]

const stats = [
  { number: "50+", label: "Projects Completed", icon: <Target className="h-6 w-6" /> },
  { number: "25+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
  { number: "3+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
  { number: "99%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your goals, target audience, and project requirements through detailed discussions and research.",
    icon: <MessageCircle className="h-8 w-8" />,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Creating wireframes and interactive prototypes to visualize the user experience before development begins.",
    icon: <Palette className="h-8 w-8" />,
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Building your project with clean, scalable code while conducting thorough testing to ensure quality and performance.",
    icon: <Code className="h-8 w-8" />,
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Deploying your project and providing ongoing support with performance monitoring and optimization.",
    icon: <Rocket className="h-8 w-8" />,
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 bg-purple-50">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="bg-purple-600 text-white px-4 py-2 text-sm font-medium">
                ✨ Available for new projects
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl lg:text-8xl"
            >
              Building
              <span className="text-purple-600 block">High-Performance</span>
              <span className="text-gray-900">Frontends</span>
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="mt-8 text-2xl font-bold text-gray-700 sm:text-3xl">
              with React, Next.js & Tailwind CSS
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-3xl text-xl text-gray-600 sm:text-2xl leading-relaxed"
            >
              Crafting fast, SEO-optimized, and beautifully animated interfaces that convert visitors into customers and
              delight users at every interaction.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 text-xl font-semibold rounded-full group shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-xl font-semibold rounded-full"
              >
                Let's Talk
                <Coffee className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="flex justify-center mb-4 text-purple-600">{stat.icon}</div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">Skills & Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mastering the latest technologies to build exceptional digital experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                    <CardContent className="p-8">
                      <div className="text-5xl mb-6">{skill.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{skill.name}</h3>
                      <p className="text-gray-600 mb-6">{skill.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <div className="text-right mt-2 text-sm font-semibold text-purple-600">{skill.level}%</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">What I Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-stack frontend solutions that drive business growth and user engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div key={service.title} variants={index % 2 === 0 ? fadeInLeft : fadeInRight} className="group">
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                    <CardContent className="p-10">
                      <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 py-24 bg-purple-800 text-white">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-5xl font-black mb-8">About Me</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    <span className="font-bold text-pink-300">Front-End Web Developer</span> passionate about creating
                    digital experiences that make a difference. With expertise in
                    <span className="font-bold text-purple-300"> React & Next.js</span>, I specialize in building
                    high-performance applications that users love.
                  </p>
                  <p>
                    As a <span className="font-bold text-pink-300">JavaScript & C++ Developer</span> with a
                    <span className="font-bold text-purple-300"> BSc in Software Engineering from KIU</span>, I bring
                    both technical depth and creative vision to every project.
                  </p>
                  <p>
                    My expertise in <span className="font-bold text-pink-300">HTML, CSS, Tailwind</span> and
                    <span className="font-bold text-purple-300"> UI Animation with Framer Motion</span> ensures your
                    project not only functions flawlessly but also captivates your audience.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <Code className="h-8 w-8 text-pink-300 mx-auto mb-3" />
                    <div className="font-bold">Clean Code</div>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-purple-300 mx-auto mb-3" />
                    <div className="font-bold">Performance</div>
                  </div>
                  <div className="text-center">
                    <Palette className="h-8 w-8 text-pink-300 mx-auto mb-3" />
                    <div className="font-bold">Design</div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative  z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img
                    src="/about.jpg"
                    alt="Developer workspace"
                    className="w-full  object-cover rounded-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-pink-500 rounded-full p-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-purple-500 rounded-2xl p-6 text-white">
                  <div className="text-2xl font-bold">3+ Years</div>
                  <div className="text-sm opacity-90">Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">How I Work</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven process that delivers exceptional results every time
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <motion.div key={step.step} variants={fadeInUp} className="relative">
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full text-white font-black text-xl mb-6">
                      {step.step}
                      <div className="absolute -top-2 -right-2 text-purple-600">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-purple-300 transform translate-x-4"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A showcase of recent work demonstrating modern web development excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Link href={project.a} target="blank">
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white text-gray-900">{project.category}</Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                          <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-16">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 py-24 bg-purple-50">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">Client Love</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take my word for it - here's what clients say about working with me
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600 text-sm">{testimonial.role}</div>
                          <div className="text-purple-600 text-sm font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-24 bg-purple-800 text-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Sparkles className="h-16 w-16 text-pink-300 mx-auto mb-6" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-5xl font-black mb-8">
              Ready to Build Something Amazing?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-2xl text-purple-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Let's transform your ideas into a stunning digital experience that drives results and delights users.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 px-10 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="mr-3 h-6 w-6" />
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 text-xl font-bold rounded-full"
              >
                Schedule a Call
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 flex justify-center space-x-8">
              <a href="https://github.com/Pro-Xrammer">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-pink-300 hover:bg-white/10 p-4 rounded-full"
                >
                  <Github className="h-8 w-8" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/akmal-hussain-a1a4a6354">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-pink-300 hover:bg-white/10 p-4 rounded-full"
                >
                  <Linkedin className="h-8 w-8" />
                </Button>
              </a>
              <a href="https://mailto:akmalhuss313@gmail.com">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-pink-300 hover:bg-white/10 p-4 rounded-full"
                >
                  <Mail className="h-8 w-8" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Frontend Developer</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Creating exceptional digital experiences with modern web technologies. Let's build something amazing
                together.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://github.com/Pro-Xrammer" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/akmal-hussain-a1a4a6354" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://mailto:akmalhuss313@gmail.com" className="hover:text-white transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2024 Frontend Developer Portfolio. Built with Next.js, Tailwind CSS & Framer Motion. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
