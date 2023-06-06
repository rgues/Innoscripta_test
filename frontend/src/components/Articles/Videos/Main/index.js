import React from 'react';
import VideoList from '../../../widgets/VideoList/VideoList';

const VideosMain = (props) => (
    <div>

        <VideoList
            type="card"
            title={false}
            loadmore={true}
            start={0}
            amount={3}
        />

    </div>
);


export default VideosMain;