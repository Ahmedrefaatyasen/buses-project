
import './App.css';
import Nav from './compontets/nav';
import Secion1 from './compontets/section1';
import Sidebar from './compontets/sidebar';
import Table from './compontets/table';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div style={{display:'flex',flexDirection:"column",overflow:"hidden",height:"100vw",width:"100%",backgroundColor:"rgb(215 226 231"}} >
      <Nav/>
      <Secion1/>
      <Table/>
      </div>
     
     
    </div>
  );
}

export default App;
