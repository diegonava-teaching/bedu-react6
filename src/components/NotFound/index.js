import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  console.log('index.js (3) - location', location);

  return <div>Sorry 404 error</div>;
}
