import React, { Component } from 'react';

import  Grid  from '@material-ui/core/Grid';

import { SearchBar, VideoDetail, VideoList }  from './components';

import youtube from './api/youtube';

class App extends Component {
    state= {
        videos : [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('chill music live')
    }

    onVideoSelect = (video) => {
        this.setState ({
            selectedVideo : video
        })
    }
    
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part : 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q : searchTerm
            }
        })
        
        this.setState({
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        });
        
    }
    render() {
        const { selectedVideo, videos } = this.state
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} >
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit= {this.handleSubmit} />
                        </Grid>
                        <Grid item md={8} xs={12} style={{marginBottom : '150px'}}>
                            <VideoDetail video = {selectedVideo }/>
                        </Grid>
                        <br/><br/><br/><br/><br/><br/>
                        <Grid item md={4} xs={12}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App
