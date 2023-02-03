import Portfoliob from "./Contact";
import Worksswiper from "./Swiper";
import Img from '../img/logo.png'

const Portfolioa = () =>{
    return(
      <div className="d-md-flex pb-5" id='portfolio'>
        <div className=" col-md-6">
          <div className="bg-gray p-4 pb-0 mt-1">
            <Worksswiper>
            </Worksswiper>
            <div className="bg-gray margin-1">
              <img src={Img} className = 'bg-gray img-fluid'></img>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center col-md-6 mt-5 ms-md-5">
          <p className="mt-md-5 pt-3">부트스트랩 5버전 사용</p>
          <p>기존의 테마를 튜닝하여 제작</p>
          <p>내용 추가예정입니다</p>
          <p>제작기간 : 2일</p>
          <ul className="d-flex p-0 mt-5">
            <li><p><a href="https://www.naver.com" className="text-decoration-none text-center d-block"><img src='/img/home.png' className="potimg"></img><spen className='d-block'>바로가기</spen></a></p></li>
            <li><p><a href="https://www.naver.com" className="text-decoration-none text-center d-block ps-5 pe-5"><img src='/img/notion.png' className="potimg"></img><spen className='d-block'>노션</spen></a></p></li>
            <li><p><a href="https://www.naver.com" className="text-decoration-none text-center d-block"><img src='/img/git.png' className="potimg"></img><spen className='d-block'>깃허브</spen></a></p></li>
          </ul>
        </div>
      </div>
    )
  }

  


export default Portfolioa;