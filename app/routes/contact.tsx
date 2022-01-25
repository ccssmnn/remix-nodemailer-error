import { Link } from 'remix';
import nodemailer from 'nodemailer';

export const action = async () => {
  const transport = nodemailer.createTransport();
  return { ok: true };
};

export default function Contact() {
  return (
    <div>
      <h1>Broken Contact Route</h1>
      <Link to="..">Home</Link>
    </div>
  );
}
