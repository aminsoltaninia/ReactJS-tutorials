import React from 'react'

function Card(props) {
    console.log("props :",props)
    let { title , body } = props;
    return (
        <div >
            <header className="card-header">
                <h2>{title}</h2>
            </header>
            <section className="card-body">
                <p>{body}</p>
            </section>
            <footer>
                <p>card footer</p>
            </footer>
        </div>
    )


}

export default Card;