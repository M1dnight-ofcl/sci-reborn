import { useState, useEffect } from 'react'
import './style/App.css'
import './style/velocity.full.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  const fstate = {
    default: '/logo.png',
  }
  const [favicon,setFavicon] = useState(fstate.default)
  const [status,setStatus] = useState('Home')
  useEffect(() => {
    // AOS.init();
    document.getElementById('favicon').setAttribute('href',favicon);
    document.title=`SW Reborn - ${status}`;
  })
  return (
    <>
      <div id="lp_header">
        <div className="cwrap">
          <div className='position-center-left-on-parent occupy-left-50' id="lp_h_l">
            <h1>Sci World<br/><span>reborn</span></h1>
            <hr/>
            <p>
              All the science help you need at the click of button. With dozens of helpful articles,
              theres no better place than Sci World Reborn
            </p>
            <hr/>
            <a href='#'><button className='btn_s1'>Get started</button></a>
          </div>
          <div className='position-center-right-on-parent occupy-right-50' id="lp_h_r">

          </div>
        </div>
      </div>
      <section>

      </section>
    </>
  )
}

export default App
