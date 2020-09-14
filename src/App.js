import React, { Component } from 'react';

import './App.css';
import Card from './componentFunc/Card';
import CardClassBase from './components/CardClassBase';
import MyAlert from './components/alert'
import {Carousel} from  'react-bootstrap'
import ErrorBoundry from './components/errors/ErrorBaundry'


class App extends Component {
  
  constructor(props){
     super(props)
     console.log("[app.js] run constractore ")
  }
  
  // can update state and return or return null
  static getDerivedStateFromProps(props , state){
    console.log("[app.js] run getDelivedStateFromProps ")
    return null;
  }
  
  // for updating . get new property
  shouldComponentUpdate(props , state ){
      console.log(props , state)
      console.log("[app.js] run shouldComponentUpdate ")
      return true ; // return false stop rendering 
  }
  
  // get old property
  getSnapshotBeforeUpdate(props , state ){
    console.log(props , state)
    console.log("[app.js] run getSnapshotBeforeUpdate")
    return null;
  }


  componentDidUpdate(props , state , snapshot) {
    console.log("[app.js] run componentDidUpdate")
  }


  // final step in lifesycle
  componentDidMount(){
    console.log("[app.js] run componentDidMount")
    setTimeout(()=>{
      this.setState(( state , props)=>({
        article : [ ...state.article , {id : 4 , title : 'article5' , body:'this is art 5' , active : 1 }]
      }) )
    } , 3000 )
    console.log('after new article  !!!!! ')
  }

  state = {
    article: [
      { id: 1, title: 'article1', body: 'thisis art 1', active: 1 },
      { id: 2, title: 'article2', body: 'thisis art 2', active: 0 },
      { id: 3, title: 'article3', body: 'thisis art 3', active: 1 },
    ],

    loading: false,

    btnHover: false,

    alert : {
      
      show :  true
    }

  }


  loadMore = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      let articleee = [
        { id: 4, title: 'newarticle4', body: 'thisis art 4', active: 1 },
        { id: 5, title: 'newarticle5', body: 'thisis art 5', active: 0 },
        { id: 6, title: 'newarticle6', body: 'thisis art 6', active: 1 },
      ]

      this.setState({
        article: [...this.state.article, ...articleee],
        loading: false
      })

    }, 3000)


  }

  mouseEnter = (e) => {
    this.setState({
      btnHover: true
    })
  }

  mouseLeave = (e) => {
    this.setState({
      btnHover: false
    })

  }
   
  // funct for Alert class
  setShow(status){
    
    this.setState(prevState => {
      return { 
        alert : {
          show : status
        }
      }
    }
    )
  }

  deleteArticle(articleId){
      this.setState((prevState)=>{
         return {
          
             article : prevState.article.filter(Item=>Item.id!==articleId)
          
         }
      })
  }
  
  render() {
    
    console.log("[app.js] run render ")
    let articleList = this.state.article.map((article, index) =>
      article.active ?  <CardClassBase key={index} id={article.id} title={article.title} body={article.body} deleteArticle={this.deleteArticle.bind(this)}/>: null

    )

    let btnClasses = ['btn-more']
    if (this.state.btnHover)
      btnClasses.push('active')
     
     let {alert } = this.state; 
    return (

      <div className="app">
        <div className="container">
          <MyAlert show={alert.show} setShow={this.setShow.bind(this)}/>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://roocket.ir/public/images/2020/3/4/1583305013laravel-poster-1.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://roocket.ir/public/images/2020/5/1/next.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://roocket.ir/public/images/2020/6/17/angular.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="row col-12">
            <div className="col-6">
              <Card title={this.state.article[0].title} body={this.state.article[0].body} />
            </div>
            <div className="col-6">
              <Card title="article 2 in func" body="this is article 2 in" />
            </div>

          </div>

          <ErrorBoundry>
          {
            articleList
          }
          </ErrorBoundry>
          {
            this.state.loading ? <div>loading ...</div> : articleList

          }


          <button className={`btn-more ${this.state.btnHover ? 'active' : ' '}`}
            // <button  className={btnClasses.join(' ')}
            onClick={this.loadMore}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          >load more</button>



        </div>


      </div>
    )

  }
}

export default App;
