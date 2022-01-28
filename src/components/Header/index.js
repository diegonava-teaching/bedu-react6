import { useLocation } from 'react-router-dom';

export default function Header(props) {
  const location = useLocation();
  console.log('index.js (0) - props', props);
  console.log('index.js (3) - location', location);

  return <div>Header</div>;
}
