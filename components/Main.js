import Image from 'next/image';
import { useState } from 'react';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';

const Main = ({ user, setCurrentTrack }) => {
  const hour = new Date().getHours();
  const [isTrackMenuOpen, setIsTrackMenuOpen] = useState(false);
  const [playlistHover, setPlaylistHover] = useState(false);

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

  return (
    <main className='w-full overflow-auto bg-gray-100 pb-20'>
      <h1 className='h-40  bg-gradient-to-b from-dark p-5 text-4xl font-bold text-white'>
        {greeting()}
      </h1>

      {user && user.playlists.length > 0 && (
        <section className='space-y-4 p-5'>
          <h2 className='text-3xl font-semibold'>Your Playlists</h2>

          <div className='grid grid-cols-1 gap-x-2 gap-y-4 rounded-xl sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
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
                    alt='image'
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

          <div className='grid grid-cols-1 gap-x-2 gap-y-4 rounded-xl  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
            {user.tracks.slice(0, 8).map((track) => {
              return (
                <div
                  key={track.id}
                  className='relative col-span-1 flex items-center justify-between  overflow-visible rounded-lg bg-gradient-to-tr from-primary-dark via-primary-dark to-primary pr-2'
                >
                  <div className='relative '>
                    <BsPlayCircle
                      className='absolute top-1/2 left-1/2 h-12 w-12 -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-colors duration-75 hover:text-secondary'
                      onClick={() => setCurrentTrack(track.file)}
                    />
                    <Image
                      src={track.image}
                      quality={100}
                      width={64}
                      height={64}
                      className='h-16 w-16 rounded-l-lg object-cover'
                      alt='image'
                    />
                  </div>

                  <div className='flex items-center space-x-2 '>
                    <div className='flex-1  text-right text-lg font-semibold text-white'>
                      {track.name}
                    </div>
                    <BsThreeDots
                      className='h-6 w-6 cursor-pointer text-slate-200'
                      onClick={() => setIsTrackMenuOpen(!isTrackMenuOpen)}
                    />

                    {isTrackMenuOpen && (
                      <div className='absolute bottom-3/4 right-0 rounded-lg bg-dark p-2 text-white'>
                        <div
                          className='relative'
                          onMouseEnter={() => setPlaylistHover(true)}
                          onMouseLeave={() => setPlaylistHover(false)}
                        >
                          <div className=' cursor-pointer'>Add To Playlist</div>

                          {user.playlists.length > 0 && playlistHover && (
                            <div className='absolute left-full bottom-0 max-h-36 max-w-[16rem] overflow-y-auto overflow-x-hidden rounded-lg bg-dark p-2 text-right'>
                              {user.playlists.map((playlist) => {
                                return (
                                  <div
                                    key={playlist.id}
                                    className='cursor-pointer'
                                    onClick={() =>
                                      user.addTrackToPlaylist(track, playlist)
                                    }
                                  >
                                    {playlist.name}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
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
