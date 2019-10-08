import React from 'React';

class lifeCycleOfReactComponent extends React.Component{
  constructor(props){

    super(props)
    this.state = {
      'data':'value'
    }

  }

//stem 1
static getDerivedStateFromProps(props, state){

}
//step 2
render(){
  //show component jsx with initial dtate/props data
  const {state,props} = this
  return ( <div>) Ta Da !! </div> )
}

//step 3 
componentDidMount(){
  this.setState({
    'data':'value1'
  })
}
shouldComponentUpdate(nextProps, nextState, prevProps, prevState){
  
}



export default lifeCycleOfReactComponent