import React, { Component } from 'react'
import loadingImg from '../loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className='text-center'>
            <img src={loadingImg} alt='loading' />
        </div>    
            
      </>
    )
  }
}
