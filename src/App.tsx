import { useSelector } from 'react-redux';
import { Product } from './types/product';

function App() {
  const {
    example: { products },
  }: any = useSelector((store) => store);

  return (
    <div>
      {products.map((p: Product, i: number) => (
        <h1 key={i}>{p.name}</h1>
      ))}
    </div>
  );
}

export default App;
