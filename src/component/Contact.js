import Contimg from '../img/contactimg.png'

const Contact = () =>{
    return(
      <section className="section py-5 text-center" id="preInterview">
        
        <div className=' d-md-flex'>
          <div className='col-md-5 mt-md-4'>
          <h3 className='mb-5 text-center'> &lt;Contact Me&gt;</h3>
          <img src={Contimg} className = 'img-fluid'></img>
          </div>

          <div className="col-md-7 text-start ps-md-5">
            <div className="border d-md-flex">
              <p class="col-md-6  m-0">
                <label className="ms-2 mt-1">회사명</label>
                <input type="text" name="company"class="d-block duqor" placeholder="회사명을 입력해 주세요."></input>
              </p>
              <p class="col-md-6 company_w m-0">
                <label className="ms-2 mt-1">회사위치</label>
                <input type="text" name="company_w"class="d-block duqor" placeholder="회사위치를 입력해 주세요."></input>
              </p>
            </div>
            <div className="border">
              <p className="ms-2 mb-0 mt-1">채용직무</p>
              <div>
                <input type="checkbox" id="work1" className="ms-2"></input>
                <label for="work1" className="ms-2 fs-6">프론트엔드</label>
                <input type="checkbox" id="work2" className="ms-2"></input>
                <label for="work2" className="ms-2 fs-6">퍼블리셔</label>
                <input type="checkbox" id="work3" className="ms-2"></input>
                <label for="work3" className="ms-2 fs-6">기획자</label>
                <input type="checkbox" id="work4" className="ms-2"></input>
                <label for="work4" className="ms-2 fs-6">디자이너</label>
                <input type="checkbox" id="work5" className="ms-2"></input>
                <label for="work5" className="ms-2 fs-6">기타</label>
              </div>
            </div>
            <div className="border">
              <p className="ms-2 mb-0 mt-1">주력언어</p>
              <div>
                <input type="checkbox" id="lang1" className="ms-2"></input>
                <label for="lang1" className="ms-2 fs-6">리액트</label>
                <input type="checkbox" id="lang2" className="ms-2"></input>
                <label for="lang2" className="ms-2 fs-6">노드</label>
                <input type="checkbox" id="lang3" className="ms-2"></input>
                <label for="lang3" className="ms-2 fs-6">PHP</label>
                <input type="checkbox" id="lang4" className="ms-2"></input>
                <label for="lang4" className="ms-2 fs-6">자바스크립트</label>
                <input type="checkbox" id="lang5" className="ms-2"></input>
                <label for="lang5" className="ms-2 fs-6">제이쿼리</label>
                <input type="checkbox" id="lang6" className="ms-2"></input>
                <label for="lang6" className="ms-2 fs-6">CMS</label>
              </div>
            </div>
            <div className="border d-md-flex">
              <p class="col-md-6  m-0">
                <label className="ms-2 mt-1">담당자님 연락처</label>
                <input type="text" name="talk"class="d-block duqor" placeholder="담당자님의 연락처를 알려주세요."></input>
              </p>
              <p class="col-md-6 talk_line m-0">
                <label className="ms-2 mt-1">면접날짜, 시간</label>
                <input type="text" name="talk"class="d-block duqor" placeholder="2023.00.00 2시"></input>
              </p>
            </div>
            <div className='border'>
              <p className='ms-2 mt-1'>남기실 말
                <textarea className='d-block border-0 p-0 w-100'></textarea>
              </p>
            </div>
            <div className='text-center'>
              <input type="submit" value="보내기" className='mt-5'></input>
            </div>
          </div>
        </div>
        
      </section>
    )
  }


export default Contact;