import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderHome, ListMovieHome, ListTrailersHome, InformativeSection } from './components/index';

export default class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            trailers : [
                {
                    id: 1,
                    title: "Marvel's Agents of S.H.I.E.L.D.",
                    description : "Marvel's Agents of S.H.I.E.L.D. - Official Season 7 Trailer",
                    img : 'https://image.tmdb.org/t/p/w355_and_h200_multi_faces/iWopHyAvuIDjGX10Yc3nn6UEebW.jpg'
                }
            ],
            movies : [
                {
                    id: 1,
                    title: 'Parasite',
                    date : 'May 30, 2019',
                    range: '89',
                    img : 'https://image.tmdb.org/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
                }
            ],
            indexPopular : 0,
            indexFree : 0,
            indexTrailer: 0
        }
    };

    changeGallery = async ( index , title) => {
        switch (title) {
            case 'free':
                this.setState({ indexFree : index });
                break;
            case 'latestTrailers':
                this.setState({ indexTrailer : index });
                break;
            default:
                this.setState({ indexPopular : index });
                break;
        }
    };

    render(){

        const { movies, trailers } = this.state;
        const { indexPopular, indexFree, indexTrailer } = this.state;

        //, "In Theaters" add to btns popular

        return (
            <>
                <div className="welcome-container" >
                    <HeaderHome/>
                    <ListMovieHome 
                        title = {'popular'}
                        name={"What's Popular"} 
                        movies = { movies }
                        btns={ [ "Streaming", "On TV", "For Rent" ]}
                        index = { indexPopular }
                        onCallback = { this.changeGallery }

                    />
                    <ListMovieHome 
                        title = {'free'}
                        name={"Free To Watch"} 
                        movies = { movies }
                        btns={ [ "Movies", "TV" ]}
                        index = { indexFree }
                        onCallback = { this.changeGallery }

                    />
                    <ListTrailersHome 
                        title = {'latestTrailers'}
                        name={"Latest Trailers"} 
                        trailers = { trailers }
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