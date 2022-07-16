import React, { Component } from 'react';
import loading from './loading.gif';
// loading gif to import kiya

export default class Spinner extends Component 
{
  render() 
  {
    /* return ()ke ander hi send krna*/ 
    return(
      <div className="text-center"> 
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  }
}
