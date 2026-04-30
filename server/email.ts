import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailParams = {
  to: string;
  subject: string;
  html: string;
  from?: string;
};

/**
 * Envoyer un email via Resend
 */
export async function sendEmail(params: EmailParams) {
  try {
    const result = await resend.emails.send({
      from: params.from || "noreply@regnardmedical.com",
      to: params.to,
      subject: params.subject,
      html: params.html,
    });

    if (result.error) {
      console.error("[Email Error]", result.error);
      return { success: false, error: result.error };
    }

    console.log("[Email Sent]", result.data?.id);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("[Email Exception]", error);
    return { success: false, error };
  }
}

/**
 * Envoyer un email de notification pour un nouveau message de contact
 */
export async function sendContactNotificationEmail(params: {
  adminEmail: string;
  senderName: string;
  senderEmail: string;
  senderFunction?: string;
  senderEstablishment?: string;
  senderPhone?: string;
  message: string;
}) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Nouveau message de contact</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>De:</strong> ${params.senderName}</p>
        <p><strong>Email:</strong> <a href="mailto:${params.senderEmail}">${params.senderEmail}</a></p>
        ${params.senderFunction ? `<p><strong>Fonction:</strong> ${params.senderFunction}</p>` : ""}
        ${params.senderEstablishment ? `<p><strong>Établissement:</strong> ${params.senderEstablishment}</p>` : ""}
        ${params.senderPhone ? `<p><strong>Téléphone:</strong> ${params.senderPhone}</p>` : ""}
      </div>

      <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap; color: #555;">${params.message}</p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
        <p>Consultez le dashboard pour gérer ce message: <a href="https://regnard-medical-export-production.up.railway.app/admin/messages">Admin Messages</a></p>
      </div>
    </div>
  `;

  return sendEmail({
    to: params.adminEmail,
    subject: `Nouveau message de contact de ${params.senderName}`,
    html,
  });
}
