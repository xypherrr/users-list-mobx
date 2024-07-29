
import './App.css';
import User from './components/User';
import { usersStore } from './components/UsersStore';

function App() {
  return (
    <>
    
    <User store={usersStore} />
    </>
  );
}

export default App;
