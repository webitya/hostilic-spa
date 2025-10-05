"use client"

import { useState, useEffect } from "react"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import InstagramIcon from "@mui/icons-material/Instagram"
import SendIcon from "@mui/icons-material/Send"
import PersonIcon from "@mui/icons-material/Person"
import MessageIcon from "@mui/icons-material/Message"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage("Message sent successfully! We'll get back to you soon.")
        setFormData({ name: "", email: "", mobile: "", message: "" })
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage(error.message || "Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
      }
    }

    checkMobile()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdfa 100%)",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  }

  const heroStyle = {
    background: "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)",
    color: "white",
    padding: "2.5rem 1rem",
    textAlign: "center",
  }

  const heroTitleStyle = {
    fontSize: "2.2rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#ecfdf5",
    letterSpacing: "-0.025em",
  }

  const heroSubtitleStyle = {
    fontSize: "1rem",
    color: "#a7f3d0",
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "1.5",
    fontWeight: "400",
  }

  const mainContentStyle = {
    padding: "2rem 1rem",
    maxWidth: "1000px",
    margin: "0 auto",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
  }

  const desktopGridStyle = {
    display: "grid",
    gridTemplateColumns: "1.3fr 0.7fr",
    gap: "2rem",
  }

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(6, 95, 70, 0.08)",
  }

  const formTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#065f46",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }

  const formSubtitleStyle = {
    color: "#047857",
    marginBottom: "1.5rem",
    fontSize: "0.875rem",
    fontWeight: "400",
  }

  const inputGroupStyle = {
    marginBottom: "1rem",
  }

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    marginBottom: "0.375rem",
    color: "#065f46",
    fontWeight: "500",
    fontSize: "0.875rem",
  }

  const inputStyle = {
    width: "100%",
    padding: "0.625rem 0.875rem",
    border: "1.5px solid #d1fae5",
    borderRadius: "8px",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.2s ease",
    backgroundColor: "#fefffe",
    boxSizing: "border-box",
    fontFamily: "inherit",
  }

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: "#059669",
    boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.08)",
  }

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "80px",
    fontFamily: "inherit",
  }

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem 1.5rem",
    background: isSubmitting
      ? "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)"
      : "linear-gradient(135deg, #059669 0%, #047857 100%)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: isSubmitting ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    transform: isSubmitting ? "none" : "translateY(0)",
    boxShadow: isSubmitting ? "none" : "0 2px 8px rgba(5, 150, 105, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  }

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
  }

  const alertStyle = {
    padding: "0.75rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }

  const successAlertStyle = {
    ...alertStyle,
    backgroundColor: "#ecfdf5",
    color: "#065f46",
    border: "1px solid #a7f3d0",
  }

  const errorAlertStyle = {
    ...alertStyle,
    backgroundColor: "#fef2f2",
    color: "#991b1b",
    border: "1px solid #fca5a5",
  }

  const contactCardStyle = {
    ...cardStyle,
    background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
    color: "#334155",
  }

  const contactTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#065f46",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }

  const contactSubtitleStyle = {
    color: "#64748b",
    marginBottom: "1.25rem",
    fontSize: "0.875rem",
  }

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0.875rem",
    marginBottom: "0.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    gap: "0.75rem",
    border: "1px solid rgba(6, 95, 70, 0.06)",
  }

  const contactItemHoverStyle = {
    ...contactItemStyle,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    transform: "translateX(2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
  }

  const iconStyle = {
    color: "#059669",
    fontSize: "1.25rem",
  }

  const contactLabelStyle = {
    fontWeight: "600",
    color: "#065f46",
    marginBottom: "0.125rem",
    fontSize: "0.8rem",
  }

  const contactValueStyle = {
    color: "#475569",
    fontSize: "0.875rem",
  }

  const linkStyle = {
    color: "#059669",
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontWeight: "500",
  }

  const linkHoverStyle = {
    color: "#047857",
  }

  const bottomSectionStyle = {
    background: "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)",
    color: "white",
    padding: "2.5rem 1rem",
    textAlign: "center",
  }

  const bottomTitleStyle = {
    fontSize: "1.75rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#ecfdf5",
    letterSpacing: "-0.025em",
  }

  const bottomTextStyle = {
    fontSize: "0.95rem",
    color: "#a7f3d0",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    fontWeight: "400",
  }

  const loadingSpinnerStyle = {
    display: "inline-block",
    width: "14px",
    height: "14px",
    border: "2px solid #ffffff",
    borderRadius: "50%",
    borderTopColor: "transparent",
    animation: "spin 1s linear infinite",
  }

  return (
    <div style={containerStyle}>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Hero Banner */}
      <section style={heroStyle}>
        <h1 style={heroTitleStyle}>Contact Us</h1>
        <p style={heroSubtitleStyle}>
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </section>

      {/* Contact Form and Info */}
      <section style={mainContentStyle}>
        <div style={!isMobile ? desktopGridStyle : gridStyle}>
          {/* Contact Form - Left Side */}
          <div style={cardStyle}>
            <h2 style={formTitleStyle}>
              <MessageIcon style={{ color: "#059669", fontSize: "1.25rem" }} />
              Send us a message
            </h2>
            <p style={formSubtitleStyle}>Fill out the form below and we'll respond within 24 hours.</p>

            {submitStatus === "success" && (
              <div style={successAlertStyle}>
                <EmailIcon style={{ color: "#065f46", fontSize: "1rem" }} />
                {statusMessage}
              </div>
            )}

            {submitStatus === "error" && (
              <div style={errorAlertStyle}>
                <MessageIcon style={{ color: "#991b1b", fontSize: "1rem" }} />
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={inputGroupStyle}>
                <label htmlFor="name" style={labelStyle}>
                  <PersonIcon style={{ fontSize: "1rem", color: "#059669" }} />
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  style={inputStyle}
                  disabled={isSubmitting}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="email" style={labelStyle}>
                  <EmailIcon style={{ fontSize: "1rem", color: "#059669" }} />
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  style={inputStyle}
                  disabled={isSubmitting}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="mobile" style={labelStyle}>
                  <ContactPhoneIcon style={{ fontSize: "1rem", color: "#059669" }} />
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  style={inputStyle}
                  disabled={isSubmitting}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="message" style={labelStyle}>
                  <MessageIcon style={{ fontSize: "1rem", color: "#059669" }} />
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you... (optional)"
                  style={textareaStyle}
                  disabled={isSubmitting}
                  onFocus={(e) =>
                    Object.assign(e.target.style, {
                      ...textareaStyle,
                      borderColor: "#059669",
                      boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.08)",
                    })
                  }
                  onBlur={(e) => Object.assign(e.target.style, textareaStyle)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={buttonStyle}
                onMouseEnter={(e) => !isSubmitting && Object.assign(e.target.style, buttonHoverStyle)}
                onMouseLeave={(e) => !isSubmitting && Object.assign(e.target.style, buttonStyle)}
              >
                {isSubmitting ? (
                  <>
                    <span style={loadingSpinnerStyle}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon style={{ fontSize: "1rem" }} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div style={contactCardStyle}>
            <h2 style={contactTitleStyle}>
              <ContactPhoneIcon style={{ color: "#059669", fontSize: "1.25rem" }} />
              Contact Info
            </h2>
            <p style={contactSubtitleStyle}>Reach out through any of these channels</p>

            <div
              style={contactItemStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, contactItemHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, contactItemStyle)}
            >
              <PhoneIcon style={iconStyle} />
              <div>
                <p style={contactLabelStyle}>Phone</p>
                <p style={contactValueStyle}>+91 6306366978</p>
              </div>
            </div>

            <div
              style={contactItemStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, contactItemHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, contactItemStyle)}
            >
              <EmailIcon style={iconStyle} />
              <div>
                <p style={contactLabelStyle}>Email</p>
                <p style={contactValueStyle}>Srholisticwellness@gmail.com</p>
              </div>
            </div>

            <div
              style={contactItemStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, contactItemHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, contactItemStyle)}
            >
              <WhatsAppIcon style={iconStyle} />
              <div>
                <p style={contactLabelStyle}>WhatsApp</p>
                <p style={contactValueStyle}>+91 6306366978</p>
              </div>
            </div>

            <div
              style={contactItemStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, contactItemHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, contactItemStyle)}
            >
              <InstagramIcon style={iconStyle} />
              <div>
                <p style={contactLabelStyle}>Instagram</p>
                <a
                  href="https://instagram.com/srholisticwellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
                >
                  @srholisticwellness
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section style={bottomSectionStyle}>
        <h2 style={bottomTitleStyle}>We'd Love to Hear from You</h2>
        <p style={bottomTextStyle}>
          Your journey to wellness begins with a simple conversation — and we're honored to walk that path with you.
          Whether you're looking for guidance, healing, or clarity, this is your safe space to reach out. Every message
          you send is received with genuine care, compassion, and intention.
        </p>
      </section>
    </div>
  )
}
