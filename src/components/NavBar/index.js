import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigation = useNavigate();

  const handleOnClick = () => {
    navigation('/random', { state: { username: 'Rodrigo' } });
  };

  return (
    <div>
      <Link state={{ lastName: 'Nava' }} to='/'>
        Header
      </Link>
      ||
      <Link to='/body'>Body</Link>
      ||
      <button onClick={handleOnClick}>Random</button>
    </div>
  );
}
