import { sendMail } from '../../services/email.js';

export async function sendEmailController(req, res) {
  const { name, email, phone } = req.body;
  try {
    await sendMail({
      recipient: process.env.EMAIL,
      subject: `פנייה חדשה מאת ${name}`,
      body: `שם: ${name}\nאימייל: ${email}\nטלפון: ${phone}`
    });
    console.log(req.body);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
}