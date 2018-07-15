import React from 'react';


const Edit = (props) => {
  console.log(props);
  return (<div>
  This is from the Edit component.
  The id number is : {props.match.params.id}
  </div>);
};
export default Edit;
