import nodemailer from 'nodemailer';
import config from '../config';
export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'redwanislam.me@gmail.com',
      pass: 'utcv jjvk mgqi cyvm',
    },
  });

  await transporter.sendMail({
    from: 'redwanislam.me@gmail.com', // sender address
    to,
    subject: 'password change', // Subject line
    text: 'reset your password within 10 mins', // plain text body
    html,
  });
};
