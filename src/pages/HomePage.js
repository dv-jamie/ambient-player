import AudioBox from "../components/AudioBox";
import "./HomePage.css";
import tangled from "../images/tangled.jfif"

function HomePage() {
    return (
        <div className="container">
            <img src={tangled} />
            <div className="overlap"></div>
            <AudioBox />
        </div>
    )
}

export default HomePage;