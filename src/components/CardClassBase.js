import React, { PureComponent } from 'react'
import './Card.css'
import { Card } from 'react-bootstrap'

class CardClassBase extends PureComponent {

    state = {
        
    }

    constructor(props) {
        super(props)
        console.log("[cardClass.js] run constractore ")
    }
    
    
    // can update state and return or return null
    static getDerivedStateFromProps(props, state) {
        console.log("[cardClass.js] run getDelivedStateFromProps ")
        return null;
    } 
// final step in lifesycle
    componentDidMount() {
        console.log("[cardClass.js] run componentDidMount")
    }

  
    componentWillUnmount(){// run befor deleting 
        console.log("[cardClass.js] run componentWillUnmount")
    }
    evenHander(e) {
        // console.log("hhhhh")
        // console.log("this after bind : ", this)/// this is a value after bind ... tazrigh mikonim beehesh this ro 

    }

    render() {
        console.log("[cardClass.js] run render ")
        //  console.log("this : ", this)
        let { id ,title, body, deleteArticle } = this.props;
        return (
            <Card>

                <header className="card-header">
                    <h2>{title}</h2>

                </header>
                <section className="card-body">
                    <p>{body}</p>
                    <button onClick={this.evenHander.bind(this, 'amin')}>click</button>
                </section>
                <footer className="card-footer">
                    <p>card footer</p>
                    <button onClick={()=>  deleteArticle(id)}>delete</button>
                </footer>


            </Card>
        )
    }



}


export default CardClassBase