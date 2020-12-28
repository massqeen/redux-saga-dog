import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDog } from './redux/actions/fetchDog';

const App = () => {
  const { src, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDog());
  }, [dispatch]);
  const onClick = useCallback(() => dispatch(fetchDog()), [dispatch]);

  return (
    <div>
      <button onClick={onClick}>Show dog</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error, try again ({error})</p>}
      {src && <img src={src} alt="dog" />}
    </div>
  );
};

export default App;
