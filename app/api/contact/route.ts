import { NextRequest, NextResponse } from "next/server";

// This route accepts the contact form submission. Wire it to a transactional
// email provider (e.g. Resend, SendGrid) and/or the WhatsApp Business API to
// notify RCCL staff. For now it validates the payload and returns success so
// the front end can be built and tested end-to-end.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, service, location, budget, message } = body ?? {};

    if (!name || !contact || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, contact detail, and message are required." },
        { status: 400 }
      );
    }

    // [X] TODO for RCCL's developer: send an email via a transactional email
    // provider and/or forward this payload to a WhatsApp Business API
    // endpoint here. Example (pseudocode):
    //
    // await sendEmail({
    //   to: "info@rccl.co.ss",
    //   subject: `New enquiry from ${name}`,
    //   body: JSON.stringify({ name, contact, service, location, budget, message }),
    // });

    console.log("New RCCL enquiry:", { name, contact, service, location, budget, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
