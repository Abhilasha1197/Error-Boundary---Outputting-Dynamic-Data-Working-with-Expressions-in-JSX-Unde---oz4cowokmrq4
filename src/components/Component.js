import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);

  return (
    <>
    {    
        error && <div>{uncoughterror}</div>
    }
    </>
  );
};

export default Component;
