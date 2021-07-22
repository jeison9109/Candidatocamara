// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/voto.json'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }

    
    };

    return(
      <div>
        <Lottie options={defaultOptions}
        style={{width:120, display:'flex', justifyContent:'center'}}
       />
      
      </div>
    )
  }
}

export default UncontrolledLottie