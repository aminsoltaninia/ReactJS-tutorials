import React, { PureComponent } from 'react'
import './Card.css'
import { Alert ,Button } from 'react-bootstrap'

class AlertComponent extends PureComponent {

    state={
    }

    constructor(props){
        super(props)
        console.log("[ALERT.js] run constractore ")
     }
     
     // can update state and return or return null
     static getDerivedStateFromProps(props , state){
       console.log("[ALERT.js] run getDelivedStateFromProps ")
       return null;
     }
     
     
     
     // get old property
     getSnapshotBeforeUpdate(props , state ){
      
       console.log("[ALERT.js] run getSnapshotBeforeUpdate")
       return null;
     }
   
   
     componentDidUpdate(props , state , snapshot) {
       console.log("[ALERT.js] run componentDidUpdate")
     }
   
   
     // final step in lifesycle
     componentDidMount(){
       console.log("[ALERT.js] run componentDidMount")
      
     }
   
  
    render() {
        console.log("[Alert.js] run render ")
        //  console.log("this : ", this)
        let { show , setShow } = this.props;
        return (
            <>
                <Alert show={show} variant="success" >
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={()=> setShow(false)} variant="outline-success">
                            Close me ya'll!
                        </Button>
                    </div>
                </Alert>

                {!show && <Button onClick={()=> setShow(true)}>Show Alert</Button>}
            </>
        )
    }



}


export default AlertComponent