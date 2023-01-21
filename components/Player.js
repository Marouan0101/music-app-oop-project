import ReactPlayer from 'react-player';

const Player = ({ currentTrack }) => {
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
