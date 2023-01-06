import Portfoliob from "./Contact";
import Worksswiper from "./Swiper";
import Img from '../img/logo.png'

const Portfolioa = () =>{
    return(
      <div className="d-md-flex pb-5">
        <div className=" col-md-6 ">
          <div className="bg-gray p-4 pb-0">
            <Worksswiper>
            </Worksswiper>
            <div className="bg-gray margin-1">
              <img src={Img} className = 'bg-gray img-fluid'></img>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center col-md-6 mt-5 ms-md-5">
          <p>부트스트랩 5버전을 사용하였습니다.</p>
          <p>기존의 테마를 튜닝하여 제작하였습니다.</p>
          <p>내용 추가예정입니다</p>
          <p>제작기간 : 2일</p>
          <ul className="d-flex">
            <li><a className="pe-3 text-decoration-none">바로가기</a></li>
            <li><a>노션</a></li>
            <li><a className="ps-3 text-decoration-none">깃허브</a></li>
          </ul>
        </div>
      </div>
    )
  }

  


export default Portfolioa;