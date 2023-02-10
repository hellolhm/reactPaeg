import interviewDBlink from '../json/preinterview.json';
const Preinterview = (props) => {
    
    const interviewjson = interviewDBlink[props.objnm];   
   
    return(
      
      <section className="section py-5" id={props.contentid}>
        <h3>{props.title}</h3>
          <div className=' d-md-flex'>
            <div className='border col-md-6 p-4 mb-md-0 mb-3'>
              <div className='d-flex'>
                <p className='fs-4'>LV.27 이효명</p>
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
                <p className='fs-4'>Certificate</p>
                  <div className='d-md-flex wkrurwmd'>
                    <p className='text-white m-0'>2023 GTQ 포토샵 1급</p>
                    <p className='ms-md-5 text-white m-0'>2023 웹기능사</p>
                  </div>
                  <div className='d-md-flex wkrurwmd'>
                    <p className='text-white m-0'>2022 운전면허 1종보통</p>
                    <p className='ms-md-5 text-white m-0'>2019 태권도 공인 4단</p>
                  </div>
              </div>

              <h5 className='dlfur mt-4 text-center'>나의 이력</h5>
                <div className='dlfurt'>
                    <p className='text-white mb-2 mt-4'>2014.2 ~ 2014.9 <spen className='text-white'>대상물류센터</spen></p>
                    <p className='text-white mb-2'>2014.9 ~ 2015.5 <spen className='text-white'>11번가 물류센터</spen></p>
                    <p className='text-white mb-2'>2015.5 ~ 2016.12 <spen className='text-white'>용인 물류센터</spen></p>
                    <p className='text-white mb-2'>2016.2 ~ 2017.6<spen className='text-white'>생활용품점 알바</spen></p>
                    <p className='text-white mb-2'>2017.8 ~ 2018.3<spen className='text-white'>태권도 보조사범</spen></p>
                    <p className='text-white mb-2'>2019.4 ~ 2020.3 <spen className='text-white'>미스터 오징어 매니져</spen></p>
                    <p className='text-white mb-0'>2020.6 ~ 2022.3 <spen className='text-white'>코스마트 능평점 캐셔</spen></p>
                </div> 
            </div>
            <div className='col-md-6 border'>
              <p className='fs-2 text-center pt-4 m-0'>MY</p>
              <p className='fs-2 text-center m-0 pb-1'>SKILL</p>
              <div className='d-flex mt-4 skillimg'>
                  <div className='skill_l col-6 p-md-4 ps-3 pt-3'>
                    <div className='d-flex'>
                      <spen><img src='/skillimg/htmlcss.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>CSS/HTML</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/jq.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>jQuery</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/js.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>JavaScript</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/ca24.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>cafe24</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/react.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>React</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                  </div>

                  <div className='skill_r col-6 p-md-4 ps-2 pt-3'>
                  <div className='d-flex'>
                      <spen><img src='/skillimg/ps.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>Photoshop</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/ai.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>Illustrator</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/fig.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>Figma</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/sir.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>gnoobord</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                    <div className='d-flex'>
                      <spen><img src='/skillimg/boot.png'></img></spen> 
                    <div>
                      <p className='text-white m-0 ms-md-5 ms-4 line'>Bootstrap</p>
                      <p className='text-white m-0 ms-md-5 ms-4 pb-3'>95/100</p>
                    </div>
                    </div> 
                  </div>
              </div>
            </div>
          </div>
      </section>
    )
  }

  export default Preinterview;