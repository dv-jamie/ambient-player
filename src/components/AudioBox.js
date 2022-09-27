import "./AudioBox.css";
import tangled from "../images/tangled.jfif"

function AudioBox() {
    return (
        <div className="audio-box">
            <h3 className="title">Disney OST</h3>
            <div className="album-cover">
                <img src={tangled} />
                <div className="button-wrap">
                    <span class="play_button material-symbols-outlined">play_circle</span>
                    <div className="volume-controller">
                        <input type="range" min="0" max="1" step="0.01" value="1" />
                    </div>
                </div>
            </div>
            <h1 className="album-title">tangled</h1>
            <ul className="navi">
                <li>
                    <img src="" />
                </li>
                <li>
                    <img src="" />
                </li>
                <li>
                    <img src="" />
                </li>
                <li>
                    <img src="" />
                </li>
                <li>
                    <img src="" />
                </li>
            </ul>
        </div>
    );
}

export default AudioBox;
  