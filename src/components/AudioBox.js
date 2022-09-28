import "./AudioBox.css";
import coco_thumb from "../images/coco_thumb.jpg"
import frozen_thumb from "../images/frozen_thumb.jpg"
import moana_thumb from "../images/moana_thumb.jpeg"
import tangled_thumb from "../images/tangled_thumb.jpeg"
import zootopia_thumb from "../images/zootopia_thumb.jpg"
import coco from "../images/coco.jpg"
import frozen from "../images/frozen.jpg"
import moana from "../images/moana.jpg"
import tangled from "../images/tangled.jfif"
import zootopia from "../images/zootopia.jfif"
import { useState } from "react";

function AudioBox(props) {
    const [albumTitle, setAlbumTitle] = useState("coco")

    const onNaviClick = (src, name) => {
        props.setAlbumCover(src)
        setAlbumTitle(name)
    }

    return (
        <div className="audio-box">
            <h3 className="title">Disney OST</h3>
            <div className="album-cover">
                <img src={props.albumCover} />
                <div className="button-wrap">
                    <span class="play_button material-symbols-outlined">play_circle</span>
                    <div className="volume-controller">
                        <input type="range" min="0" max="1" step="0.01" value="1" />
                    </div>
                </div>
            </div>
            <h1 className="album-title">{albumTitle}</h1>
            <ul className="navi">
                <li onClick={() => onNaviClick(coco, "COCO")}>
                    <img src={coco_thumb} />
                </li>
                <li onClick={() => onNaviClick(frozen, "FROZEN")}>
                    <img src={frozen_thumb} />
                </li>
                <li onClick={() => onNaviClick(moana, "MOANA")}>
                    <img src={moana_thumb} />
                </li>
                <li onClick={() => onNaviClick(tangled, "TANGLED")}>
                    <img src={tangled_thumb} />
                </li>
                <li onClick={() => onNaviClick(zootopia, "ZOOTOPIA")}>
                    <img src={zootopia_thumb} />
                </li>
            </ul>
        </div>
    );
}

export default AudioBox;
  