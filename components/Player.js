import {
  BsSkipEnd,
  BsSkipStart,
  BsPlayCircle,
  BsPauseCircle,
  BsArrowsExpand,
  BsArrowsCollapse,
} from 'react-icons/bs';
import Image from 'next/image';
import { useState } from 'react';
//import player from '../lib/player';
import ReactPlayer from 'react-player';

const Player = ({ queue, currentTrack }) => {
  /* <section className='absolute left-1/2 bottom-0 z-20 grid  w-11/12 -translate-y-4 -translate-x-1/2 grid-cols-3 items-center rounded-xl bg-gradient-to-tr from-secondary to-secondary-dark  p-2 opacity-90 shadow-xl transition-opacity hover:opacity-100 '> */
  /* </section> */
  return (
    currentTrack && (
      <div className='absolute left-1/2 bottom-0 w-11/12 -translate-y-4 -translate-x-1/2 opacity-80 shadow-lg transition-all hover:opacity-100 hover:shadow-2xl'>
        <ReactPlayer
          url={currentTrack}
          controls
          style={{ height: 0 }}
          height={'4rem'}
          width='100%'
          playing
        />
      </div>
    )
  );
};

export default Player;
