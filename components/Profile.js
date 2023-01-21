const Profile = ({ user }) => {
  const onProfileClick = () => {
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.toggle('profile-menu__collapsed');
    profileMenu.classList.toggle('profile-menu__open');
  };

  return (
    <div
      id='profile-menu'
      className='profile-menu__collapsed absolute right-5 top-5 w-44 space-y-4 bg-dark py-2 px-4 text-white shadow-xl'
      onClick={onProfileClick}
    >
      <div className='text-center hover:cursor-pointer'>
        {user.type === 'artist' ? user.name : user.username}
      </div>

      <ul className='space-y-2'>
        {user.type === 'artist' && <li>Create Track</li>}
        <li>Create Playlist</li>

        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Profile;
