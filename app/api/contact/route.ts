import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const {
      businessName,
      ownerName,
      email,
      phone,
      businessType,
      location,
      yearsInBusiness,
      annualRevenue,
      employees,
      additionalInfo
    } = data

    const { error } = await resend.emails.send({
      from: 'Methodic Ventures <contact@methodicventures.com>',
      to: 'gavin@methodicventures.com',
      subject: `New Business Inquiry: ${businessName}`,
      html: `
        <h2>New Business Inquiry from Methodic Website</h2>

        <h3>Contact Information</h3>
        <p><strong>Owner Name:</strong> ${ownerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Business Details</h3>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Type of Business:</strong> ${businessType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Years in Business:</strong> ${yearsInBusiness}</p>
        <p><strong>Annual Revenue:</strong> ${annualRevenue}</p>
        <p><strong>Number of Employees:</strong> ${employees}</p>

        ${additionalInfo ? `<h3>Additional Information</h3><p>${additionalInfo}</p>` : ''}
      `
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
