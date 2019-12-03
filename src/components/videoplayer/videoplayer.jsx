import React from 'react';
import PropTypes from 'prop-types';

class Videoplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.timeout = 1000;
    this.playTimeoutId = null;

    this.managePlayingVideo = this.managePlayingVideo.bind(this);
    this.clearTimeoutWithPlay = this.clearTimeoutWithPlay.bind(this);
  }

  clearTimeoutWithPlay(value) {
    clearTimeout(this.playTimeoutId);
    this.playTimeoutId = null;

    return this._player && this._player[(value) ? `play` : `load`]();
  }

  managePlayingVideo(isNeedPlaying) {
    if (isNeedPlaying) {
      this.playTimeoutId = setTimeout(() => {
        this._player.play();
      }, this.timeout);
    } else {
      this.clearTimeoutWithPlay(isNeedPlaying);
    }
  }

  componentDidMount() {
    this._player = this._videoRef.current;

    if (this._player !== null) {
      this._player.onended = () => {
        this._player.load();
      };
    }
  }

  componentDidUpdate(prevProps) {
    const {isNeedPlaying} = this.props;

    if (isNeedPlaying !== prevProps.isNeedPlaying) {
      this.managePlayingVideo(isNeedPlaying);
    }
  }

  componentWillUnmount() {
    if (this._player !== null) {
      this._player.onended = ``;
    }
  }

  render() {
    const {
      title,
      poster,
      previews,
      isMuted
    } = this.props;

    const sources = previews.map((item, i) => (
      <source src={item.src} type={item.type} key={`video-source-${i}`} />
    ));

    if (sources.length === 0) {
      return (<img src={poster} alt={title} width="280" height="175" />);
    }

    return (
      <video ref={this._videoRef} poster={poster} width="100%" muted={isMuted}>
        {sources}
        Sorry, your browser is a piece of shit
      </video>
    );
  }
}

Videoplayer.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previews: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    type: PropTypes.string
  })),
  isNeedPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool
};

export default Videoplayer;
