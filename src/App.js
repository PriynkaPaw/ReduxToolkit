import './App.css';
import IncreamentCart from './IncreamentCart';
import AddProducts from './ReduxApi/component/AddProducts';
import ProductList from './ReduxApi/component/ProductList';

function App() {
  
  return (
    <div className="App flex">
     {/* <IncreamentCart /> */}
     <AddProducts />
     
     <ProductList />
    </div>
  );
}

export default App;
