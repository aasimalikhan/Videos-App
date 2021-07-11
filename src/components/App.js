import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('random')
    }

    onTermSubmit = async (term) => {
        const response1 = await youtube.get('/search', {
            params: {
                q: term,
            }
        });
        this.setState({videos: response1.data.items, selectedVideo: response1.data.items[0]});
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className="ui container">
                <div style={{textAlign:"center"}}><img style={{height: '50px',marginTop:'1rem',marginBottom: '-2rem'}} src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" />
                <h1>Youtube Search</h1>
                <p>(Limited API Calls)</p>
                </div>
            <div>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail videoLink={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} vids={this.state.videos}/>        
                    </div>
                </div>
            </div>
            </div>
            </div>

        )
    }
}

export default App;