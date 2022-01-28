import { useParams } from 'react-router-dom';

export default function SubRoute() {
  const params = useParams();
  const { id } = params;

  return <div>SubRoute {id}</div>;
}
