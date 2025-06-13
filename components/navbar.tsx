"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <span className="text-2xl font-black text-purple-600">
            Dev<span className="text-gray-900">Portfolio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:bg-purple-50 rounded-full"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex space-x-4 pt-4 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
