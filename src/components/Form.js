import React from 'react';

const Form = ({ onSubmit }) => {
  return (
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="name"
        />
        <input
          name="offense"
          placeholder="offense"
        />
        <button
          type="submit"
        >Submit</button>
      </form>
  );
}

export default Form;
