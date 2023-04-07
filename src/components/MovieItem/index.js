// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-url" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="close-button-container">
              <button
                type="button"
                className="close-button"
                data-testid="closeButton"
                onClick={close}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
