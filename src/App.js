import './App.css';
import ChatUI from './ChatUI';
import Sider from './Sider';

function App() {
  return (
    <div className="flex">
      <Sider />
      <ChatUI />
    </div>
  );
}

export default App;
