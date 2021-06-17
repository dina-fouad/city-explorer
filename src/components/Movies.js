
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

    render() {
        return (
            <div>

                {this.props.showMovies &&

                    <Card style={{ width: '18rem' }}>
                        {this.props.moviesData[0].imageUrl&&
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${this.props.moviesData[0].imageUrl}`} alt={this.props.moviesData[0].title}
                            title={this.props.moviesData[0].title} style={{ height: '18rem' }} />}
                       
                        <Card.Body>
                            
                            <Card.Title>{this.props.moviesData[0].title}</Card.Title>
                            
                            <Card.Text>
                                {this.props.moviesData[0].overview}
                            </Card.Text>
                            
                            <Card.Text> Average Votes: {this.props.moviesData[0].average_votes}
                            </Card.Text>
                            
                            <Card.Text>Total Votes: {this.props.moviesData[0].total_votes}
                            </Card.Text>
                            
                            <Card.Text> Popularity: {this.props.moviesData[0].popularity}
                            </Card.Text>
                            
                            <Card.Text>Release Date: {this.props.moviesData[0].released_on}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                }
            </div>
        )
    }
}

export default Movies;