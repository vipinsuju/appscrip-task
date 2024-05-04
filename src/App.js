import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Nav from "./component/nav/nav";
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
