import { useState } from 'react';
import artist from '../lib/artist';
import defaultUser from '../lib/defaultUser';

const Login = ({ setUser, image, setImage }) => {
  const [isArtist, setIsArtist] = useState(false);
  const [username, setUsername] = useState('');
  const [artistName, setArtistName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    isArtist
      ? setUser(new artist(username, URL.createObjectURL(image), artistName))
      : setUser(new defaultUser(username, URL.createObjectURL(image)));
  };

  return (
    <div
      id='login-form'
      className='absolute z-50 h-screen w-screen bg-black/40'
    >
      <div className='absolute  top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white p-2 transition xs:p-4 sm:max-h-[90%] sm:w-10/12 sm:rounded-2xl sm:p-8 md:w-9/12 md:p-12 lg:w-7/12 xl:w-5/12 2xl:w-4/12'>
        <h1 className='mb-10 text-center text-2xl font-bold sm:text-4xl'>
          Create Account
        </h1>

        <form
          onSubmit={(e) => submitHandler(e)}
          autoComplete='off'
          className='space-y-8'
        >
          <div>
            <label className='label' htmlFor='username'>
              Username:
            </label>
            <input
              className='input-text'
              type='text'
              name='username'
              placeholder='Username'
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div>
            <label className='label' htmlFor='password'>
              Password:
            </label>
            <input
              className='input-text'
              type='password'
              name='password'
              placeholder='Password'
              required
            />
          </div>

          <div className='flex space-x-2'>
            <p className='text-xl font-semibold'>Profile Picture:</p>

            <input
              type='file'
              accept='image/png, image/jpeg'
              name='image'
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <div className='text-center'>
            <label className='label-checkbox text-xl' htmlFor='artist'>
              Artist?
            </label>
            <input
              className='checkbox'
              type='checkbox'
              checked={isArtist}
              onChange={() => setIsArtist(!isArtist)}
              name='artist'
              placeholder='Profile Picture'
            />
          </div>

          {isArtist && (
            <div>
              <label className='label' htmlFor='artist_name'>
                Artist Name:
              </label>
              <input
                className='input-text'
                type='text'
                placeholder='Artist Name'
                name='artist_name'
                required
                onChange={(e) => setArtistName(e.target.value)}
                value={artistName}
              />
            </div>
          )}

          <input
            className='button mt-32 w-full cursor-pointer bg-gradient-to-r from-secondary to-secondary-dark p-2 text-xl sm:p-4'
            type='submit'
            value='Sign Up'
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
