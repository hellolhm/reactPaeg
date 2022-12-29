import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';
import Worksswiper from './component/Swiper';
import Preinterview from './component/Preinterview'
import Portfolioa from './component/Portfolioa'
import Contact from './component/Contact'



function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Portfolioa></Portfolioa>
      <Preinterview contentid="me" objnm="noticeObj"  title="<INFO>" ></Preinterview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

const Footer = () =>{
  return(
    <footer className="py-5">
      <ul className="d-flex justify-content-center">
        <li><a href="">git</a></li>
        <li><a href="">instar</a></li>
        <li><a href="">notion</a></li>
      </ul>
    </footer>
  )
}

export default App;
