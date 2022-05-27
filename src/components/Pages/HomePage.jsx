import css from "../Pages/pages.css";
import Video from "./../../assets/video/background-video.mp4"

function HomePage() {
    return (
        <main className="main">
           <div className="main-video">
               <video src={Video} autoPlay loop muted></video>
    </div>
       </main>
    ) 
  }
  
  export default HomePage;