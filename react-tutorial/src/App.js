import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello'
// import Message from './components/Message'
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile name='John Insert' lastName='Cena' />
    </div>
  );
}

export default App;
