import * as React from 'react'
import Slider from '../widgets/NewsSlider/Slider'
import NewsList from '../widgets/NewsList/NewsList'
import VideoList from '../widgets/VideoList/VideoList'


export class Home extends React.Component {
  
  render() {
    return <div>
        <Slider 
            type = "featured"
            start = {0} 
            amount = {5} 
            settings = {{
            dots:false
          }}
        />

        <NewsList 
            type = "card" 
            loadmore = {true} 
            start = {3} 
            amount = {3}  
        />

        <VideoList
            type="card"
            title={true}
            loadmore={true}
            start={0}
            amount={3}
        />
    </div>
  }
  
}