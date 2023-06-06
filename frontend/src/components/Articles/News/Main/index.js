import React from 'react';
import Slider from '../../../widgets/NewsSlider/Slider';
import NewsList from '../../../widgets/NewsList/NewsList';

const NewsMain = (props) => (
    <div>

        <Slider
            type="featured"
            start={0}
            amount={3}
            settings={{
                dots: false
            }}
        />

        <NewsList
            type="cardMain"
            loadmore={true}
            start={3}
            amount={10}
        />


    </div>
);

export default NewsMain;