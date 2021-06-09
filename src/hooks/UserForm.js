import React from 'react';
import useInput from './useInput';

function UserForm() {
  const [firstName, bindFname, resetFname] = useInput('');
  const [lastName, bindLname, resetLname] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Hello ${firstName} ${lastName}`);
    resetFname();
    resetLname();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label> First Name</label>
          <input {...bindFname} type='text' />
        </div>
        <div>
          <label> Last Name</label>
          <input {...bindLname} type='text' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
