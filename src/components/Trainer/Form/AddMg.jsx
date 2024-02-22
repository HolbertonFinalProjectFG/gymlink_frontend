import { useState } from 'react';

export const AddMg = ({show}) => {

  if (!show)
    return

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
    setExercises(newExercises);
  };

  const onFormSubmit = (e) => {
    // const postUrl = import.meta.env.VITE_BACKEND_URL + '/api/trainer/'
    e.preventDefault();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-md">
        <form onSubmit={onFormSubmit}>
          <label className="text-lg font-semibold mb-2">Name of MG:</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <label>Exercices:</label>
          {exercises.map((exercise, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={exercise}
                onChange={(e) => handleExerciseChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mr-2"
                placeholder="Excercise"
                required
              />
              <button type="button" onClick={() => removeExerciseInput(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" onClick={addExerciseInput}>
            Add excercise
          </button>
          <button type="submit">
            Submit muscular group
          </button>
        </form>
      </div>
    </div>
  );
};
