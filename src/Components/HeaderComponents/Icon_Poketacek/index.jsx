import React, { useContext } from 'react';
import icon_poketacek from './img/poketacek-prozatimni.png';
import SoundProvider, { SoundContext } from '../../../Providers/SoundContext';
import { useLocation } from 'react-router-dom';
import '../Header/style.css';

const Icon_Poketacek = () => {
  const { soundOn, setSoundOn } = useContext(SoundContext);
  let audioAhojVyber = new Audio(
    '../../assets/sounds/soundsOfPoketacek/ahojVyber.mp3',
  );
  let audioCoVidis = new Audio(
    '../../assets/sounds/soundsOfPoketacek/coVidisnaObrazkuPismenko.mp3',
  );
  let audioVyberHrat = new Audio(
    '../../assets/sounds/soundsOfPoketacek/VyberSiHrat.mp3',
  );
  let audioCoKSobe = new Audio(
    '../../assets/sounds/soundsOfPoketacek/CoKSObePatri.mp3',
  );
  let audioNaObrazek = new Audio(
    '../../assets/sounds/soundsOfPoketacek/naObrazekPismenko.mp3',
  );
  const poketacekHome = location.pathname === '/';
  const poketacekLearn = location.pathname === '/learn';
  const poketacekPlay = location.pathname === '/play';
  const poketacekPexeso = location.pathname === '/pexeso';
  const poketacekDragDrop = location.pathname === '/dragdrop';

  return (
    <img
      className="header-icon"
      src={icon_poketacek}
      alt="mascot Poketacek"
      onClick={() => {
        if (poketacekHome) {
          if (soundOn) {
            audioAhojVyber.play();
          }
        } else if (poketacekLearn) {
          if (soundOn) {
            audioCoVidis.play();
          }
        } else if (poketacekPlay) {
          if (soundOn) {
            audioVyberHrat.play();
          }
        } else if (poketacekPexeso) {
          if (soundOn) {
            audioCoKSobe.play();
          }
        } else if (poketacekDragDrop) {
          if (soundOn) {
            audioNaObrazek.play();
          }
        }
      }}
    />
  );
};

export default Icon_Poketacek;
