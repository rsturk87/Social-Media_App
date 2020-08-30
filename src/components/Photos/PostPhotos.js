import React from 'react';
import PostPhoto from './Photo';

class PostPhotos extends React.Component{
    constructor(props){
        super(props);
        this.API_key = 'cddc64ea8269edd3c07b3ae30fc874e3';
        var tagsList = [
            'travel','people','countryside','city','music','design','art',
            'london','uk','concert','party','colors','gig','tech','spirit',
            'nature','scotland','ireland','lisbon','wine','pub','manchester',
            'liverpool','nagoya','drink','urban','guitar','blue','ocean'
        ];

        var randomNumber = Math.floor(Math.random()*tagsList.length);
        var randomTag = tagsList[randomNumber];
        this.tag = randomTag.toString();

        this.state = {
            n_photos: props.n_photos || 1,
            photos: [{
                title: undefined,
                id: undefined,
                farm: undefined,
                server: undefined,
                secret: undefined,
            }]
        }
    }

    fetchData = () => {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.API_key}&tags=${this.tag}&per_page=${this.state.n_photos}&format=json&nojsoncallback=1`)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    let photos = data.photos.photo.map(
                        photo => {
                            return {
                                title: photo.title,
                                id: photo.id,
                                farm: photo.farm,
                                server: photo.server,
                                secret: photo.secret
                            }
                        }
                    );
                    this.setState({photos})
                }
            )
    }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps){
        if (this.props.tag !== prevProps.tag){
            this.fetchData();
        }
    }

    render(){
        return (
            <div className="photo-container">
                {this.state.photos[0].title
                &&
                this.state.photos.map(
                    photo => <PostPhoto
                                farm={photo.farm}
                                server={photo.server}
                                secret={photo.secret}
                                title={photo.title}
                                id={photo.id}
                                key={photo.id}
                            />
                )}
            </div>
        );
    }
}


export default PostPhotos;