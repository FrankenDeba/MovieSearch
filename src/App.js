import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Cover from "./Cover";
import Info from "./Info";
import Review from "./Review";

const InputForm = (props)=>{
  return (<div>
      <input type = "text" onChange = {props.input}></input>
      <button onClick = {props.search}>click me</button>
  </div>)
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieName:"",
      data: ''
  }
  }

  showMovie = (data) =>{
    console.log("got data");
    console.log(data);
    
    
    this.setState({data:data})
    
  }

  getData = (name)=>{
  fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=${name}&apikey=7a758540`)
  .then((response) => {return response.json()})
  .then((data) => this.showMovie(data))
  ;
  }
  setData = (movieName,e) =>{
    console.log(e.target.value);
    this.setState({movieName:e.target.value});
  }
  render(){
    const {data} = this.state;
    return (
      <div className="App">
        <InputForm input = {(e)=>this.setData(this.state.movieName,e)} search = {()=>this.getData(this.state.movieName)}/>
        { data ?
        <div>
        <Cover image = {data.Poster} title ={data.Title}/>
        <Info year = {data.Year} actors = {data.Actors} director = {data.Director}/>
        <Review rating = {data.Ratings[0].Value} genre = {data.Genre} plot = {data.Plot}/>
       </div>
      :
      null
        }
      </div>
    );
  }
  
}

export default App;
