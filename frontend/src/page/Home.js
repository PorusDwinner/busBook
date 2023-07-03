import '../styles/Home.css';
import HomeSearch from "../component/HomeComponents/HomeSearch"
import HomeBranding from "../component/HomeComponents/HomeBranding"


const Home = () => {

  

  return (
    <div >
        <div id='mainHomeContainer'>
          <HomeSearch/>
        </div>
        
        <div>
          <HomeBranding/>
        </div>
    </div>
  )
}

export default Home