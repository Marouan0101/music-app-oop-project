import Head from 'next/head';
import Player from '../components/Player';
import Login from '../components/Login';
import { useState } from 'react';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import CreatePlaylistModal from '../components/CreatePlaylistModal';
import CreateTrackModal from '../components/CreateTrackModal';

export default function Home() {
  const [user, setUser] = useState();
  const [profileImage, setProfileImage] = useState(null);
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const [createTrackModal, setCreateTrackModal] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <>
      <Head>
        <title>Marouan - OOP</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {!user && (
        <Login
          setUser={setUser}
          image={profileImage}
          setImage={setProfileImage}
        />
      )}

      {createPlaylistModal && (
        <CreatePlaylistModal
          user={user}
          createPlaylistModal={createPlaylistModal}
          setCreatePlaylistModal={setCreatePlaylistModal}
        />
      )}

      {createTrackModal && (
        <CreateTrackModal
          user={user}
          createTrackModal={createTrackModal}
          setCreateTrackModal={setCreateTrackModal}
        />
      )}

      <div className='relative'>
        {user && <Profile user={user} image={profileImage} />}

        <div className='flex h-screen'>
          <Sidebar
            user={user}
            createPlaylistModal={createPlaylistModal}
            setCreatePlaylistModal={setCreatePlaylistModal}
            createTrackModal={createTrackModal}
            setCreateTrackModal={setCreateTrackModal}
          />

          <Main user={user} setCurrentTrack={setCurrentTrack} />
        </div>

        <Player currentTrack={currentTrack} />
      </div>
    </>
  );
}
