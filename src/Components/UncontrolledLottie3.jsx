import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/lawyer.json'

class UncontrolledLottie3 extends Component {


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
        style={{width:80, display:'flex', justifyContent:'center',height:'auto' }}
       />
      
      </div>
    )
  }
}

export default UncontrolledLottie3