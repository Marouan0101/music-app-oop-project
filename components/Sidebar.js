import Link from 'next/link';
import { BsSearch, BsBookmark, BsMusicNote } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';

const Sidebar = ({
  user,
  createPlaylistModal,
  setCreatePlaylistModal,
  createTrackModal,
  setCreateTrackModal,
}) => {
  return (
    <section className='w-1/4 min-w-[12rem] overflow-y-auto overflow-x-hidden bg-dark p-2 text-lg text-white '>
      <div className='space-y-4 text-xl font-semibold'>
        <div className='cursor-pointer text-center'>
          <Link href='/'>Home</Link>
        </div>

        <div className='flex items-center space-x-1 rounded-full bg-white py-2 pl-2 pr-2'>
          <BsSearch className='h-5 w-5 text-black' />
          <input
            type='search'
            className='flex-1 rounded-full pl-1 text-base text-black outline-none'
            placeholder='Search'
          />
        </div>

        <div
          className='flex items-center justify-between rounded-lg border-2 border-secondary p-2 transition-colors duration-100 hover:cursor-pointer hover:bg-secondary'
          onClick={() => setCreatePlaylistModal(!createPlaylistModal)}
        >
          <div>Create Playlist</div>
          <RiPlayListAddFill className='h-6 w-6' />
        </div>

        {user && user.type === 'artist' && (
          <div
            className='flex justify-between rounded-lg border-2 border-secondary p-2 transition-colors duration-100 hover:cursor-pointer hover:bg-secondary'
            onClick={() => setCreateTrackModal(!createTrackModal)}
          >
            <div>Create Track</div>
            <BsMusicNote className='h-6 w-6' />
          </div>
        )}

        <div className='flex justify-between rounded-lg border-2 border-secondary p-2 transition-colors duration-100 hover:cursor-pointer hover:bg-secondary'>
          <div>Saved Tracks</div>
          <BsBookmark className='h-6 w-6' />
        </div>
      </div>

      <hr className='my-4' />

      <div>
        {user &&
          user.playlists.map((playlist) => {
            return (
              <div className='hover:cursor-pointer hover:text-secondary'>
                {playlist.name}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Sidebar;
