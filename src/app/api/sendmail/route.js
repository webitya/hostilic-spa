import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Mobile validation regex (Indian format)
const mobileRegex = /^[+]?[0-9]{10,15}$/

export async function POST(request) {
  try {
    const { name, email, mobile, message } = await request.json()

    // Validation - remove message from required fields check
    if (!name || !email || !mobile) {
      return NextResponse.json({ error: "Name, email, and mobile number are required" }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (!mobileRegex.test(mobile.replace(/\s+/g, ""))) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 })
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Name must be between 2 and 100 characters" }, { status: 400 })
    }

    // Optional: Only validate if message is provided and very long
    if (message && message.length > 1000) {
      return NextResponse.json({ error: "Message is too long (maximum 1000 characters)" }, { status: 400 })
    }

    // Create transporter - Fixed method name
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to admin with lead details
    const adminEmailOptions = {
      from: process.env.EMAIL_USER,
      to: "srholisticspa@gmail.com", // Admin email
      subject: `🌿 New Lead: ${name} - Contact Form Submission`,
      html: `
        <div style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f0fdf4;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">🌿 New Lead Alert</h1>
            <p style="color: #a7f3d0; margin: 8px 0 0 0; font-size: 14px;">Someone is interested in your wellness services</p>
          </div>
          
          <!-- Lead Summary -->
          <div style="background: #ecfdf5; padding: 20px; border-left: 4px solid #059669;">
            <h2 style="color: #065f46; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              👤 Lead Information
            </h2>
            <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 6px rgba(0,0,0,0.05);">
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center; padding: 10px; background: #f8fafc; border-radius: 6px; border-left: 3px solid #059669;">
                  <strong style="color: #059669; min-width: 70px; font-size: 14px;">Name:</strong>
                  <span style="color: #374151; font-size: 14px; font-weight: 500;">${name}</span>
                </div>
                <div style="display: flex; align-items: center; padding: 10px; background: #f8fafc; border-radius: 6px; border-left: 3px solid #047857;">
                  <strong style="color: #047857; min-width: 70px; font-size: 14px;">Email:</strong>
                  <a href="mailto:${email}" style="color: #047857; text-decoration: none; font-weight: 500; font-size: 14px;">${email}</a>
                </div>
                <div style="display: flex; align-items: center; padding: 10px; background: #f8fafc; border-radius: 6px; border-left: 3px solid #065f46;">
                  <strong style="color: #065f46; min-width: 70px; font-size: 14px;">Mobile:</strong>
                  <a href="tel:${mobile}" style="color: #065f46; text-decoration: none; font-weight: 500; font-size: 14px;">${mobile}</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Message Section -->
          <div style="background: white; padding: 20px; margin: 0; border-left: 4px solid #6b7280;">
            <h3 style="color: #374151; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">
              💬 Their Message
            </h3>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="color: #4b5563; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                ${message || "No specific message provided - they just wanted to get in touch!"}
              </p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div style="background: #f1f5f9; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <h3 style="color: #065f46; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Quick Actions</h3>
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <a href="mailto:${email}" style="background: #059669; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 13px;">
                📧 Reply
              </a>
              <a href="tel:${mobile}" style="background: #047857; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 13px;">
                📞 Call
              </a>
              <a href="https://wa.me/${mobile.replace(/[^0-9]/g, "")}" style="background: #16a34a; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 13px;">
                💬 WhatsApp
              </a>
            </div>
            
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                Lead received on ${new Date().toLocaleString()} • SR Holistic Wellness
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Thank you email to user
    const userEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "🌿 Thank you for contacting SR Holistic Wellness",
      html: `
        <div style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">🙏 Thank You!</h1>
            <p style="color: #a7f3d0; margin: 12px 0 0 0; font-size: 16px;">We've received your message</p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 24px; background: white;">
            <p style="color: #374151; font-size: 16px; margin: 0 0 16px 0; line-height: 1.5;">
              Dear <strong style="color: #059669;">${name}</strong>,
            </p>
            
            <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for reaching out to <strong style="color: #059669;">SR Holistic Wellness</strong>. We have received your message and truly appreciate you taking the time to connect with us on your wellness journey.
            </p>
            
            <!-- Response Time Promise -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; border-left: 4px solid #059669;">
              <h3 style="color: #065f46; margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">⏰ Our Promise</h3>
              <p style="color: #065f46; margin: 0; font-weight: 500; font-size: 14px;">
                We will review your message and get back to you within 24 hours
              </p>
            </div>
            
            <!-- Message Summary -->
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
              <h4 style="color: #374151; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">📝 Your Inquiry:</h4>
              <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #059669;">
                <p style="color: #6b7280; margin: 0; font-style: italic; line-height: 1.5; font-size: 14px;">
                  ${message ? `"${message.substring(0, 200)}${message.length > 200 ? "..." : ""}"` : "You reached out to connect with us - we're excited to help you on your wellness journey!"}
                </p>
              </div>
            </div>
            
            <!-- Contact Details Confirmation -->
            <div style="background: #f1f5f9; padding: 16px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #374151; margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">📋 We'll contact you at:</h4>
              <div style="display: grid; gap: 8px;">
                <p style="margin: 0; color: #4b5563; font-size: 14px;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 0; color: #4b5563; font-size: 14px;"><strong>Mobile:</strong> ${mobile}</p>
              </div>
            </div>
            
            <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 20px 0;">
              Follow us on Instagram 
              <a href="https://instagram.com/srholisticwellness" style="color: #059669; text-decoration: none; font-weight: 500;">@srholisticwellness</a> 
              for wellness tips and updates.
            </p>
          </div>
          
          <!-- Contact Info Footer -->
          <div style="background: #f8fafc; color: #374151; padding: 24px; text-align: center; border-radius: 0 0 8px 8px;">
            <h3 style="color: #059669; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">📞 Need Immediate Help?</h3>
            <div style="display: grid; gap: 8px; max-width: 280px; margin: 0 auto;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Phone/WhatsApp:</strong><br>
                <a href="tel:+919530155999" style="color: #059669; text-decoration: none; font-size: 16px; font-weight: 500;">+91 95301 55999</a>
              </p>
              <p style="margin: 0; font-size: 14px;">
                <strong>Email:</strong><br>
                <a href="mailto:srholisticspa@gmail.com" style="color: #059669; text-decoration: none; font-weight: 500;">srholisticspa@gmail.com</a>
              </p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="color: #059669; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
                🌿 SR Holistic Wellness
              </p>
              <p style="color: #64748b; font-size: 13px; margin: 0; line-height: 1.4;">
                Your wellness journey starts here.<br>
                We're honored to support your path to healing.
              </p>
              <p style="color: #9ca3af; font-size: 11px; margin: 12px 0 0 0;">
                ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(adminEmailOptions), transporter.sendMail(userEmailOptions)])

    return NextResponse.json(
      {
        message: "Emails sent successfully",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        success: false,
      },
      { status: 500 },
    )
  }
}
