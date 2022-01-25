import { Link } from 'remix';

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <div>
        <Link to="contact">Broken Contact</Link>
      </div>
      <div>
        <Link to="working-contact">Working Contact</Link>
      </div>
    </div>
  );
}
