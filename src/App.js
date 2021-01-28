import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />

        {/* feed */}

        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
