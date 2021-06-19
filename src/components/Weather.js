import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {


    render() {
        return (
            <>

                {this.props.showWeather &&

                    <ListGroup>

                        <ListGroup.Item >
                            {this.props.weatherData[0].date} <br></br>
                            {this.props.weatherData[0].description}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            {this.props.weatherData[1].date} <br></br>
                            {this.props.weatherData[1].description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {this.props.weatherData[2].date} <br></br>
                            {this.props.weatherData[2].description}
                        </ListGroup.Item>

                    </ListGroup>

                }
                {this.props.showWeather == false &&

                    <ListGroup>

                        <ListGroup.Item >
                            {this.props.weatherData.data}
                        </ListGroup.Item>

                    </ListGroup>
                }
            </>
        )
    }

}

export default Weather;