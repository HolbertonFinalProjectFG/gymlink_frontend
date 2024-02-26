import { useState } from 'react';
import axios from 'axios';

export const AddMg = ({ show, setShow}) => {

  if (!show)
    return

  const handleCloseForm = () => {
    setShow(false);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };
  

  const [groupName, setGroupName] = useState('');
  const [exercises, setExercises] = useState(['']);

  const handleExerciseChange = (index, value) => {
    const newExercises = [...exercises];
    newExercises[index] = value;
    setExercises(newExercises);
  };

  const addExerciseInput = () => {
    setExercises([...exercises, '']);
  };

  const removeExerciseInput = (index) => {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const postUrl = import.meta.env.VITE_BACKEND_URL + '/api/trainer/'
    try {
      console.log(
        {
          name: groupName,
          content: exercises,
        }
      )
      const response = await axios.post(postUrl, {
        name: groupName,
        content: exercises,
      }, { withCredentials: true });
      console.log('Succesful post: MG was sent ', response.data);
    } catch (error) {
      console.error('Error post: MG was not sent', error);
    }
  };

  return (
    <div onClick={handleCloseForm} className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/[0.5] backdrop-blur-sm">
      <div onClick={handleFormClick} className="bg-light-backg rounded-[20px] boxshadow">
          <div className='flex flex-row'>
            <label className="text-3xl font-bold mb-5 block p-10">Name of muscular group:</label>
            <button onClick={handleCloseForm}>
              <svg height="20px" width="20px" version="1.1" id="Capa_1"
              viewBox="0 0 490 490" xmlSpace="preserve" className="p-0 m-0 hover:text-red-500 transition-colors">
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490
                489.292,457.678 277.331,245.004 489.292,32.337" fill="currentColor"/>
              </svg>
            </button>
          </div>
        <form onSubmit={onFormSubmit} className='pl-10 pr-10'>
          <input
            type="text"
            id="groupName"
            value={groupName}
            placeholder='Muscular Group name'
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full min-h-12 p-2 rounded-xl mb-10"
          />

          <label className="block mb-2 text-xl font-bold">Exercises:</label>
          {
            exercises.map((exercise, index) => (
            <div key={index} className="flex items-center mb-10">
              <input
                type="text"
                value={exercise}
                onChange={(e) => handleExerciseChange(index, e.target.value)}
                className="w-full p-2 min-h-12 mr-2 rounded-xl "
                placeholder="Exercise"
                required
              />
              <button
                type="button"
                onClick={() => removeExerciseInput(index)}
                className="bg-light-primary text-light-secondary p-2 rounded-md w-auto h-auto
                hover:scale-[1.01] transition-transform active:scale-[0.99]"
              >
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_313_609)">
                    <path d="M4 4L23.0919 23.0919" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M4 23.0919L23.0919 4.00001" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_313_609">
                      <rect width="27" height="27" fill="currentColor"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            ))
          }
          <button
            type="button"
            onClick={addExerciseInput}
            className="bg-light-primary text-light-secondary p-3 rounded-[10px] mb-10
            hover:scale-[1.01] transition-transform active:scale-[0.99]
            text-lg font-bold m-5"
          >
            Add Exercise
          </button>
          <button onClick={onFormSubmit} className="bg-light-primary text-light-secondary p-3 rounded-[10px]
          hover:scale-[1.01] transition-transform active:scale-[0.99]
          text-lg font-bold m-5 mb-10">
            Submit Muscular Group
          </button>
        </form>
      </div>
    </div>
  );
};
