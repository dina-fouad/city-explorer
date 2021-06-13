import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      Data:'',
      errMsg:'',
      displayErrMsg: false,
      displayMap:false
    }
  }
  getLocation = async(event) =>{
    event.preventDefault();
    let seachQuery = event.target.searchQuery.value;
    let locURL = `https://us1.locationiq.com/v1/search.php?key=pk.b5c1fd2f37c40bd3df773b1b16f2cf35&q=${seachQuery}&format=json`;
    try {
      let locResult = await axios.get(locURL);
      console.log(locResult.data);
      this.setState({
        Data:locResult.data[0],
        displayMap:true
      })
    }
    catch {
      this.setState({
        errMsg: 'Unable to geocode',
        displayErrMsg:true
      })
    }
    
  }

  render(){
    return(
      <div>
        <h1>React axios app</h1>
        {/* <button onClick={this.getLocation}>search</button> */}
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='searchQuery' />
          <input type='submit' value='explore' />
        </form>
        <p>{this.state.Data.display_name}</p>
        <p>{this.state.Data.lon}</p>
        <p>{this.state.Data.lat}</p>
        {this.state.displayMap &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b5c1fd2f37c40bd3df773b1b16f2cf35&center=${this.state.Data.lat},${this.state.Data.lon}`} alt='map'/> }
        { this.state.displayErrMsg && this.state.errMsg}
      </div>
    )
  }
}

export default App;