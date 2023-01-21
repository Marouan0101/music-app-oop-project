import Image from 'next/image';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';

const Main = ({ user, currentTrack, setCurrentTrack }) => {
  const hour = new Date().getHours();

  const greeting = () => {
    if (hour >= 0 && hour < 6) {
      return 'Good Night';
    } else if (hour >= 6 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternooon';
    } else if (hour >= 17 && hour < 20) {
      return 'Good Evening';
    } else if (hour >= 20 && hour < 24) {
      return 'Good Night';
    }
  };

  /* if (user) {
    user.createPlaylist('test', 'asdfsadf', 'url');
    user.createPlaylist('test2', 'asdfsadf', 'url');
    console.log(user.playlists);
  } */

  return (
    <main className='w-full overflow-auto bg-gray-100 pb-20'>
      <h1 className='h-40  bg-gradient-to-b from-dark p-5 text-4xl font-bold text-white'>
        {greeting()}
      </h1>

      {user && user.playlists.length > 0 && (
        <section className='space-y-4 p-5'>
          <h2 className='text-3xl font-semibold'>Your Playlists</h2>

          <div className='grid grid-cols-1 gap-x-2 gap-y-4 rounded-xl  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {user.playlists.slice(0, 8).map((playlist) => {
              return (
                <div
                  key={playlist.id}
                  className='col-span-1 flex items-center overflow-hidden rounded-lg bg-gradient-to-tr from-primary-dark via-primary-dark to-primary'
                >
                  <Image
                    src={playlist.image}
                    quality={100}
                    width={64}
                    height={64}
                    className='h-16 w-16 object-cover'
                  />

                  <div className='mr-2 flex-1 text-right text-lg font-semibold text-white'>
                    {playlist.name}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {user && user.tracks.length > 0 && (
        <section className='space-y-4 p-5'>
          <h2 className='text-3xl font-semibold'>Your Tracks</h2>

          <div className='grid grid-cols-1 gap-x-2 gap-y-4 rounded-xl  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {user.tracks.slice(0, 8).map((track) => {
              return (
                <div className='col-span-1 flex items-center justify-between overflow-hidden rounded-lg bg-gradient-to-tr from-primary-dark via-primary-dark to-primary pr-2'>
                  <div className='relative'>
                    <BsPlayCircle
                      className='absolute top-1/2 left-1/2 h-12 w-12 -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-colors duration-75 hover:text-secondary'
                      onClick={() => setCurrentTrack(track.file)}
                    />
                    <Image
                      src={track.image}
                      quality={100}
                      width={64}
                      height={64}
                      className='h-16 w-16 object-cover'
                    />
                  </div>

                  <div className='relative flex items-center space-x-2'>
                    <div className='flex-1 text-right text-lg font-semibold text-white'>
                      {track.name}
                    </div>
                    <BsThreeDots className='h-6 w-6 cursor-pointer text-slate-200' />

                    <div className='absolute bottom-0 bg-black text-white'>
                      <div>Trackmenu</div>
                      <div>Trackmenu2</div>
                      <div>Trackmenu3</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Discography */}
    </main>
  );
};

export default Main;
