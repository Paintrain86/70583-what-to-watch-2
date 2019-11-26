import React from 'react';
import PropTypes from 'prop-types';

class Videoplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
      isMuted: true
    };
    this._videoRef = React.createRef();

    this.timeout = 1000;
    this._playTimeout = null;

    this._setMute = this._setMute.bind(this);
    this._manageVideo = this._manageVideo.bind(this);
  }

  _setMute() {
    this.setState((prevState) => ({
      isMuted: !prevState.muted
    }));
  }

  _manageVideo() {
    if (this.state.isPlaying) {
      if (!this._playTimeout) {
        this._playTimeout = setTimeout(() => {
          this._player.play();
          clearTimeout(this._playTimeout);
          this._playTimeout = null;
        }, this.timeout);
      }
    } else {
      clearTimeout(this._playTimeout);
      this._playTimeout = null;
      this._player.load();
    }
  }

  componentDidMount() {
    this._player = this._videoRef.current;

    if (this._player !== null) {
      this._player.oncanplaythrough = () => {
        this.setState({
          isLoading: false
        });
      };

      this._player.ontimeupdate = () => {
        this.setState({
          progress: this._player.currentTime
        });
      };

      this._player.onended = () => {
        this._player.load();
      };
    }
  }

  componentDidUpdate() {
    if (this.props.isPlaying !== this.state.isPlaying) {
      this.setState({
        isPlaying: this.props.isPlaying
      });
    } else {
      if (this._player !== null) {
        this._manageVideo();
      }
    }
  }

  componentWillUnmount() {
    if (this._player !== null) {
      this._player.oncanplaythrough = ``;
      this._player.ontimeupdate = ``;
      this._player.onended = ``;
    }
  }

  render() {
    const {
      id,
      title,
      poster,
      previews
    } = this.props;

    const sources = previews.map((item, i) => (
      <source src={item.src} type={item.type} key={`video-${id}${i}`} />
    ));

    if (sources.length === 0) {
      return (<img src={poster} alt={title} width="280" height="175" />);
    }

    return (
      <video ref={this._videoRef} controls poster={poster} width="100%" muted={this.state.isMuted} onClick={this._setMute}>
        {sources}
        Sorry, your browser is a piece of shit
      </video>
    );
  }
}

Videoplayer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previews: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    type: PropTypes.string
  })),
  isPlaying: PropTypes.bool
};

export default Videoplayer;
