import AudioBox from "../components/AudioBox";
import "./HomePage.css";
import coco from "../images/coco.jpg"
import { useState } from "react";

function HomePage() {
    const [albumCover, setAlbumCover] = useState(coco)

    return (
        <div className="container">
            <img src={albumCover} />
            <div className="overlap"></div>
            <AudioBox
                albumCover={albumCover}
                setAlbumCover={setAlbumCover}
            />
        </div>
    )
}

export default HomePage;