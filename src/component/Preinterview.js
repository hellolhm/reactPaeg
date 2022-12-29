import interviewDBlink from '../json/preinterview.json';
const Preinterview = (props) => {
    
    const interviewjson = interviewDBlink[props.objnm];   
   
    return(
      
      <section className="section py-5 text-center" id={props.contentid}>
          <h3>{props.title}</h3>
          <div className="py-5 px-5 d-flex">
            <div className='border col-6'>
              <div className='d-flex'>
                <p className='fts'>&nbsp;LV.27 &nbsp;&nbsp;이효명</p>
                <p className='col-6'>&nbsp;ISFP 1996.10.17</p>
              </div>
              <div className='text-start fts'>
                <p className='fts'>&nbsp;HP</p>
                <p className='fts'>&nbsp;MP</p>
              </div>
              <div className='text-start fts'>
                <p className='fts'>&nbsp;컬랙션</p>
                <p className='text-white'>&nbsp;2023년 GTQ 1급  &nbsp;&nbsp; 2023년 웹기능사</p>
                <p className='text-white'>&nbsp;2019년 태권도4단  &nbsp;&nbsp;  2022년 운전면허 1종보통</p>
              </div>
            </div>
            
            <div className='border col-6'>
              <p className='fts'>SKILL</p>
              <div className='d-flex skill '>
                <p className='col '>HTML / CSS<br></br><hr></hr>100 / 95</p>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
              </div>
              <div className='d-flex skill'>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
              </div>
              <div className='d-flex skill'>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
              </div>
              <div className='d-flex skill'>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
              </div>
              <div className='d-flex skill'>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
                <p className='col'>HTML / CSS<br></br>100 / 95</p>
              </div>
              
              
          </div>
          </div>
      </section>
    )
  }

  export default Preinterview;