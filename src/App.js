import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';
import Preinterview from './component/Preinterview'
import Portfolioa from './component/Portfolioa'
import Contact from './component/Contact'



function App() {
  return (
    <div className="App container-lg" id="top">
      <Header></Header>
      <Portfolioa contentid="portfolio"></Portfolioa>
      <Preinterview contentid="me" objnm="noticeObj"  title="<INFO>" ></Preinterview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

const Footer = () =>{
  return(
    <footer className='container'>
      <ul className="d-flex justify-content-center m-0 p-0">
        <div className='d-flex'>
          <li><a href="https://github.com/lettuce96" className='pe-5 text-decoration-none'>GIT</a></li>
          <li><a href="https://www.instagram.com/hyomyeong_96" className='pe-5 text-decoration-none'>INSTAR</a></li>
          <li><a href="https://www.notion.so/26e019fff9d04b78a05df607a34fa299?v=4310c45e23b14bbeb51039481ec360d3" className='text-decoration-none'>NOTION</a></li>
        </div>
      </ul>
    </footer>
  )
}

export default App;
