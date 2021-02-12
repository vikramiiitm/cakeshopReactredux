import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/index'
import {returnCake} from '../redux/index'
function CakeContainer(props) {
   return (
      <div>
         how are you
         <div>Number of cakes - {props.numOfCakes}</div>
         <button onClick = {props.buyCake}>Buy Cake</button>
         <button onClick = {props.returnCake}>Return Cake</button>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      numOfCakes : state.numOfCakes
   }
}

const mapDispatchToProps = dispatch => {
   return{
      buyCake: ()=>dispatch(buyCake()),
      // buyCake: ()=>dispatch({type:'BUY_CAKE'}),
      returnCake : ()=>dispatch(returnCake())
   }
}



export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);