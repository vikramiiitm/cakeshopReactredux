import {createStore} from 'redux'
import cakeReducer from './cake/cakeReducer'

// creating store and passing cake reducer
const store = createStore(cakeReducer)

export default store;

// now we need to provide this store to react app

// TO provide redux store to react app the react redux library 
// exports a component called a procider 
// import provider in app.js   