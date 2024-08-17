import './App.css';
import CartContextProvider from './context/SearchContext';
import RouterComponent from './Router/router';




function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <RouterComponent />  
      </CartContextProvider>
    </div>
  );
}

export default App;
