import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/redes-sociales.json'

class UncontrolledLottie2 extends Component {


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
        style={{width:180, display:'flex', justifyContent:'center',height:'auto' }}
       />
      
      </div>
    )
  }
}

export default UncontrolledLottie2