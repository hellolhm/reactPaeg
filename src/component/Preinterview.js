import interviewDBlink from '../json/preinterview.json';
const Preinterview = (props) => {
    
    const interviewjson = interviewDBlink[props.objnm];   
   
    return(
      
      <section className="section py-5" id={props.contentid}>
        <h3>{props.title}</h3>
          <div className=' d-md-flex'>
            <div className='border col-md-6 p-4 mb-md-0 mb-3'>
              <div className='d-flex'>
                <p className='fs-3'>LV.27 이효명</p>
                <p className='ms-md-5 ms-3 mt-2'>ISFP</p>
                <p className='ms-md-3 ms-3 mt-2'>1996.10.17</p>
              </div>

              <div>
                <div className='d-flex'>
                  <p>HP</p>
                  <p className='hp mb-0 mt-1 ms-3 rounded-pill'></p>
                </div>
                <div className='d-flex'>
                  <p>MP</p>
                  <p className='mp mb-0 mt-1 ms-3 me-5 rounded-pill'></p>
                </div>
              </div>

              <div>
                <p className='fs-3'>컬렉션</p>
                  <div className='d-md-flex'>
                    <p className='text-white m-0'>2023 GTQ 포토샵 1급</p>
                    <p className='ms-md-5 text-white m-0'>2023 웹기능사</p>
                  </div>
                  <div className='d-md-flex'>
                    <p className='text-white m-0'>2022 운전면허 1종보통</p>
                    <p className='ms-md-5 text-white m-0'>2019 태권도 공인 4단</p>
                  </div>
              </div>

              <h5 className='dlfur mt-4 text-center'>나의 이력</h5>
                <div>
                    <p className='text-white mb-2 mt-4'>2014.2 ~ 2014.9 대상물류센터</p>
                    <p className='text-white mb-2'>2014.9 ~ 2015.5 11번가 물류센터</p>
                    <p className='text-white mb-2'>2015.5 ~ 2016.12 용인 물류센터</p>
                    <p className='text-white mb-2'>2016.2 ~ 2017.6 생활용품점 알바</p>
                    <p className='text-white mb-2'>2017.8 ~ 2018.3 태권도 보조사범</p>
                    <p className='text-white mb-2'>2019.4 ~ 2020.3 미스터오징어</p>
                    <p className='text-white mb-0'>2020.6 ~ 2022.3 코스마트 계산원</p>
                </div> 
            </div>
            <div className='col-md-6 border'>
              <p className='fs-2 text-center pt-4 m-0'>MY</p>
              <p className='fs-2 text-center m-0 pb-1'>SKILL</p>
              <div className='d-flex mt-4'>
                  <div className='skill_l col-6 p-4'>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line pt-4'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                  </div>
                  <div className='skill_r col-6 p-4'>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line pt-4'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 line'>CSS/HTML</p>
                    <p className='text-white m-0 ms-md-5 ms-4 ps-4 pb-3'>95/100</p>
                  </div>
                  
              </div>
            </div>
          </div>
      </section>
    )
  }

  export default Preinterview;