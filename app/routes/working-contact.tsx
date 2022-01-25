import { Link } from 'remix';
import { mailer as nodemailer } from '../entry.server';

export const action = async () => {
  const transport = nodemailer.createTransport();
  return { ok: true };
};

export default function Contact() {
  return (
    <div>
      <h1>Working Contact Route</h1>
      <Link to="..">Home</Link>
    </div>
  );
}
