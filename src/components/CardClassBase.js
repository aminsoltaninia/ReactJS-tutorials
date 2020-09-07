import React, { Component } from 'react'
import './Card.css'

class CardClassBase extends Component {
   
    evenHander(e){
        console.log("hhhhh")
        console.log( "this after bind : ",this)/// this is a value after bind ... tazrigh mikonim beehesh this ro 

    } 

    render() {
        
        console.log("this : ", this)
        let { title , body } = this.props;
        return (
            <div className="card">
                <header className="card-header">
                    <h2>{title}</h2>
                    
                </header>
                <section className="card-body">
                    <p>{body}</p>
                    <button onClick={this.evenHander.bind(this,'amin')}>click</button>
                </section>
                <footer>
                    <p>card footer</p>
                </footer>
            </div>
        )
    }



}


export default CardClassBase