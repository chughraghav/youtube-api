import React from 'react'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
       <Grid item xs={12}>
           <Paper style={{display: 'flex', alignItems : 'center', cursor: 'pointer'}} 
           onClick={() => {
               window.scrollTo(50,50);
               onVideoSelect(video)
            }}
            >
               <img style={{marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
               <Typography variant="subtitle1">
                   <b>{video.snippet.title}</b>
               </Typography>
           </Paper>
       </Grid>
    )
}

export default VideoItem
