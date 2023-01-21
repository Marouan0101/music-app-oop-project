import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';

const CreateTrackModal = ({ user, createTrackModal, setCreateTrackModal }) => {
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [trackFile, setTrackFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    user.createTrack(
      name,
      URL.createObjectURL(imageFile),
      URL.createObjectURL(trackFile)
    );
    setCreateTrackModal(!createTrackModal);
    console.log(user);
  };

  return (
    <div
      id='login-form'
      className='absolute z-50 h-screen w-screen bg-black/40'
    >
      <div className='absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-auto bg-dark p-2 transition xs:p-4 sm:max-h-[90%] sm:w-10/12 sm:rounded-2xl sm:p-8 md:w-9/12 md:p-12 lg:w-7/12 xl:w-5/12 2xl:w-4/12'>
        <BsXLg
          className='absolute right-4 top-4 h-8 w-8 text-white hover:cursor-pointer'
          onClick={() => setCreateTrackModal(!createTrackModal)}
        />
        <h1 className='mb-10 text-center text-2xl font-bold text-white sm:text-4xl'>
          Create Track
        </h1>

        <form
          onSubmit={(e) => submitHandler(e)}
          autoComplete='off'
          className='space-y-8'
        >
          <div>
            <input
              className='input-text focus:outline-none'
              type='text'
              name='name'
              placeholder='Track Name'
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <input
              className='text-white'
              type='file'
              onChange={(e) => setTrackFile(e.target.files[0])}
              accept='audio/*'
              required
            />
          </div>

          <div>
            <input
              className='text-white'
              type='file'
              onChange={(e) => setImageFile(e.target.files[0])}
              accept='image/png, image/jpeg'
              required
            />
          </div>

          <input
            className='button w-full cursor-pointer bg-gradient-to-r from-secondary to-secondary-dark p-2 text-xl sm:p-4'
            type='submit'
            value='Create Track'
          />
        </form>
      </div>
    </div>
  );
};

export default CreateTrackModal;
