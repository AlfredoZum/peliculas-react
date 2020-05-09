import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderHome, ListMovieHome, ListTrailersHome, InformativeSection } from './components/index';
import { getPopular, getLatestTrailers, getFree } from '../../services/index.jsx';

export default class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            moviesPopular : {
                result: [],
                isReady: false,
                hasError : false,
                error : null,
                page: 0
            },
            moviesFree : {
                result: [],
                isReady: false,
                hasError : false,
                error : null,
                page: 0
            },
            moviesLatestTrailers : {
                result: [],
                isReady: false,
                hasError : false,
                error : null,
                page: 0
            },
            indexPopular : 0,
            indexFree : 0,
            indexTrailer: 0
        }
    };

    componentDidMount = async () => {
        //getLatestTrailers
        const { moviesPopular, indexTrailer } = this.state;
        this.getMoviesPopular('Streaming', moviesPopular.page + 1);
        this.getmoviesLatestTrailers('Streaming', indexTrailer.page + 1);
        this.getMoviesFree('Movies', indexTrailer.page + 1);
    };

    /**
     * Get list of popular movies
     */
    getMoviesPopular = async ( type, page ) => {
       
        const data = await getPopular( type, page );
        if (!data.hasError) {
            this.setState({
                moviesPopular: {
                    result : data.results,
                    isReady: true,
                    hasError : false,
                    error : null,
                    page: data.page
                }
            });
        } else {
            this.setState({
                moviesPopular: {
                    hasError: true,
                    error: data.error,
                    result: [],
                    isReady: false,
                    page: this.state.moviesPopular.page
                }
            });
        };
    }

    getMoviesFree = async ( type, page ) => {
       
        const data = await getFree( type, page );
       
        if (!data.hasError) {
            this.setState({
                moviesFree: {
                    result : data.results,
                    isReady: true,
                    hasError : false,
                    error : null,
                    page: data.page
                }
            });
        } else {
            this.setState({
                moviesFree: {
                    hasError: true,
                    error: data.error,
                    result: [],
                    isReady: false,
                    page: this.state.moviesFree.page
                }
            });
        };
    }

    getmoviesLatestTrailers = async ( type, page ) => {
        
        const data = await getLatestTrailers( type, page );

        if (!data.hasError) {
            this.setState({
                moviesLatestTrailers: {
                    result : data.results,
                    isReady: true,
                    hasError : false,
                    error : null,
                    page: data.page
                }
            });
        } else {
            this.setState({
                moviesLatestTrailers: {
                    hasError: true,
                    error: data.error,
                    result: [],
                    isReady: false,
                    page: this.state.moviesPopular.page
                }
            });
        };
    }

    /**
     * Change the option of diferent movies
    */
    changeGallery = async ( index , title, name ) => {
        switch (title) {
            case 'free':
                this.getMoviesFree( name, 1);
                this.setState({ indexFree : index });
                break;
            case 'latestTrailers':
                this.getmoviesLatestTrailers( name, 1);
                this.setState({ indexTrailer : index });
                break;
            default:
                this.getMoviesPopular( name, 1);
                this.setState({ indexPopular : index });
                break;
        }
    };

    render(){

        const { moviesPopular, moviesLatestTrailers, moviesFree } = this.state;
        const { indexPopular, indexFree, indexTrailer } = this.state;

        //, "In Theaters" add to btns popular

        return (
            <>
                <div className="welcome-container" >
                    <HeaderHome/>
                    <ListMovieHome 
                        title = {'popular'}
                        name={"What's Popular"} 
                        movies = { moviesPopular.result }
                        btns={ [ "Streaming", "On TV", "For Rent" ]}
                        index = { indexPopular }
                        onCallback = { this.changeGallery }

                    />
                    <ListMovieHome 
                        title = {'free'}
                        name={"Free To Watch"} 
                        movies = { moviesFree.result  }
                        btns={ [ "Movies", "TV" ]}
                        index = { indexFree }
                        onCallback = { this.changeGallery }

                    />
                    <ListTrailersHome 
                        title = {'latestTrailers'}
                        name={"Latest Trailers"} 
                        trailers = { moviesLatestTrailers.result }
                        btns={ [ 'Streaming', 'On Tv', 'For Rent',  ]}
                        index = { indexTrailer }
                        onCallback = { this.changeGallery }
                    />
                    <InformativeSection />
                </div>
            </>
        );
    }

}