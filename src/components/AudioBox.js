import { useEffect, useRef, useState } from "react";
import "./AudioBox.css";

const images_thumb = {
    coco: require('../images/coco_thumb.jpg'),
    frozen: require('../images/frozen_thumb.jpg'),
    moana: require('../images/moana_thumb.jpeg'),
    tangled: require('../images/tangled_thumb.jpeg'),
    zootopia: require('../images/zootopia_thumb.jpg'),
}
const images = {
    coco: require('../images/coco.jpg'),
    frozen: require('../images/frozen.jpg'),
    moana: require('../images/moana.jpg'),
    tangled: require('../images/tangled.jpeg'),
    zootopia: require('../images/zootopia.jpg'),
}
const audios = {
    coco: require('../audios/coco_ost.mp3'),
    frozen: require('../audios/frozen_ost.mp3'),
    moana: require('../audios/moana_ost.mp3'),
    tangled: require('../audios/tangled_ost.mp3'),
    zootopia: require('../audios/zootopia_ost.mp3'),
}

function AudioBox(props) {
    const audioRef = useRef()
    const [audioSrc, setAudioSrc] = useState()
    const [albumTitle, setAlbumTitle] = useState('COCO')
    
    useEffect(() => {
        audioRef.current.src = audios.coco
        console.log(audioRef.current)
    }, [])


    const onNaviClick = (name) => {
        props.setAlbumCover(images[name])
        setAudioSrc(audios[`${name}_ost`])
        setAlbumTitle(name.toUpperCase())
    }

    return (
        <div className="audio-box">
            <div className="title-wrap">
                <h1 className="album-title">{albumTitle}</h1>
                <h3 className="title">Disney OST</h3>
            </div>
            <div className="album-cover">
                <img src={props.albumCover} />
                <audio controls ref={audioRef}>
                    <source src={audioSrc} type='audio/mpeg' />
                </audio>
            </div>
            <ul className="navi">
                <li onClick={() => onNaviClick('coco')}>
                    <img src={images_thumb.coco} />
                </li>
                <li onClick={() => onNaviClick('frozen')}>
                    <img src={images_thumb.frozen} />
                </li>
                <li onClick={() => onNaviClick('moana')}>
                    <img src={images_thumb.moana} />
                </li>
                <li onClick={() => onNaviClick('tangled')}>
                    <img src={images_thumb.tangled} />
                </li>
                <li onClick={() => onNaviClick('zootopia')}>
                    <img src={images_thumb.zootopia} />
                </li>
            </ul>
        </div>
    );
}

export default AudioBox;
  