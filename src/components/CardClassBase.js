import React, { Component } from 'react'
import './Card.css'
import { Card } from 'react-bootstrap'

class CardClassBase extends Component {

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

    evenHander(e) {
        // console.log("hhhhh")
        // console.log("this after bind : ", this)/// this is a value after bind ... tazrigh mikonim beehesh this ro 

    }

    render() {
        console.log("[cardClass.js] run render ")
        //  console.log("this : ", this)
        let { title, body } = this.props;
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
                </footer>


            </Card>
        )
    }



}


export default CardClassBase