import React from 'react';
import PropTypes from 'prop-types';

class Videoplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isNeedPlaying: props.isNeedPlaying,
      isPlaying: false
    };
    this._videoRef = React.createRef();

    this.timeout = 1000;
    this._playTimeout = null;

    this._managePlayingVideo = this._managePlayingVideo.bind(this);
    this._clearTimeoutWithPlay = this._clearTimeoutWithPlay.bind(this);
  }

  _clearTimeoutWithPlay(value) {
    this.setState({
      isPlaying: value
    }, () => {
      clearTimeout(this._playTimeout);
      this._playTimeout = null;
    });
  }

  _managePlayingVideo() {
    if (this.state.isNeedPlaying) {
      if (!this.state.isPlaying && this._playTimeout === null) {
        this._playTimeout = setTimeout(() => {
          this._clearTimeoutWithPlay(true);
        }, this.timeout);
      }
    } else {
      this._clearTimeoutWithPlay(false);
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

  componentDidUpdate() {
    if (this.props.isNeedPlaying !== this.state.isNeedPlaying) {
      this.setState({
        isNeedPlaying: this.props.isNeedPlaying
      });
    } else {
      if (this._player !== null) {
        this._managePlayingVideo();
        if (this.state.isPlaying) {
          this._player.play();
        } else {
          this._player.load();
        }
      }
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
