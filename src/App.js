import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      Data:'',
      errMsg:'',
      errorMsg: false,
     Map:false
    }
  }
  getLocation = async(event) =>{
    event.preventDefault();
    let seachQuery = event.target.searchQuery.value;
    let locationURL = `https://us1.locationiq.com/v1/search.php?key=pk.b5c1fd2f37c40bd3df773b1b16f2cf35&q=${seachQuery}&format=json`;
    try {
      let locationResult = await axios.get(locationURL);
      this.setState({
        Data:locationResult.data[0],
        Map:true
      })
    }
    catch {
      this.setState({
        errMsg: 'Unable to geocode',
        errorMsg:true
      })
    }
  }

  render(){
    return(
      <div>
        <h2>choose your location</h2>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='location name' name='searchQuery' />
          <input type='submit' value='explore' />
        </form>
        <p>{this.state.Data.display_name}</p>
        <p>{this.state.Data.lon}</p>
        <p>{this.state.Data.lat}</p>
        {this.state.Map &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b5c1fd2f37c40bd3df773b1b16f2cf35&center=${this.state.Data.lat},${this.state.Data.lon}`} alt='map'/> }
        { this.state.errorMsg && this.state.errMsg}
      </div>
    )
  }
}

export default App;