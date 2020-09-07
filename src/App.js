import React, { Component } from 'react';

import './App.css';
import Card from './componentFunc/Card';
import CardClassBase from './components/CardClassBase'


class App extends Component {
  state = {
    article: [
      { id: 1, title: 'article1', body: 'thisis art 1', active : 1 },
      { id: 2, title: 'article2', body: 'thisis art 2', active : 0 },
      { id: 3, title: 'article3', body: 'thisis art 3', active : 1 },
    ],

    loading: false ,

    btnHover : false

  }

  // constructor(){
  //   super()// for run constarctor in Component
  //   setInterval(()=>{
  //     this.setState({
  //       article: [
  //         { id: 4, title: 'article4', body: 'thisis art 4' },
  //         { id: 5, title: 'article5', body: 'thisis art 5' },
  //         { id: 6, title: 'article6', body: 'thisis art 6' },
  //       ]
  //     })
  //   } , 2000)
  // }


  loadMore = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      let articleee = [
        { id: 4, title: 'newarticle4', body: 'thisis art 4', active : 1 },
        { id: 5, title: 'newarticle5', body: 'thisis art 5', active : 0 },
        { id: 6, title: 'newarticle6', body: 'thisis art 6', active : 1 },
      ]

      this.setState({
        article: [...this.state.article, ...articleee],
        loading: false
      })

    }, 3000)


  }
  
  mouseEnter = (e)=>{
      this.setState({
        btnHover : true 
      })
  }

  mouseLeave = (e)=>{
     this.setState({
       btnHover : false
     })
 
  }


  render() {
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>

    console.log("all settate    : ", this.state.article)
    let articleList = this.state.article.map((article, index) => 
      article.active ?  <CardClassBase key={index} title={article.title} body={article.body} /> : null 
      
    )
    
    let btnClasses = ['btn-more']
    if(this.state.btnHover)
        btnClasses.push('active')

    return (
      <div className="app">


        <Card title={this.state.article[0].title} body={this.state.article[0].body} />
        <Card title="article 2 in func" body="this is article 2 in" />


        {
          articleList
        }
        {
          this.state.loading ? <div>loading ...</div> : articleList

        }


        <button  className={`btn-more ${this.state.btnHover ? 'active' : ' '}`}
        // <button  className={btnClasses.join(' ')}
               onClick={this.loadMore}
               onMouseEnter={this.mouseEnter}
               onMouseLeave={this.mouseLeave}
                >load more</button>




      </div>
    )

  }
}

export default App;
