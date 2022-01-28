import { Outlet, Link } from 'react-router-dom';

export default function Body() {
  return (
    <div>
      <div>Body</div>
      <Link to='default'>Default Sub Route</Link>
      ||
      <Link to='934'>Sub Route</Link>
      <Outlet />
    </div>
  );
}
