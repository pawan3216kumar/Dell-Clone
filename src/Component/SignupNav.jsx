import React from 'react';
import { useNavigate  , Link} from 'react-router-dom';


const SignupNav = () => {
   const navigate = useNavigate();

  function handleClick() {
    navigate("./sign")

  }

  return (
    <div className='flex gap-3'>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVUKk1pnElBSuXfDsmPNYuoqVEevRdVwPTA&s" width="25px" alt="Sign In Icon" />
      </div>
      <div className='italic'>
        <h2 onClick={handleClick}>Sign In</h2>
      </div>
    </div>
  );
};

export default SignupNav;
