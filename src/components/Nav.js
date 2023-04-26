import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/modalbutton">Modal Button</Link>
    </div>
  );
}
