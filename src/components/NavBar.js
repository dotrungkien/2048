import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null
    };
  }

  componentDidMount() {
    if (this.props.userSession && this.props.userSession.isUserSignedIn()) {
      let { username, person } = this.props;
      var name = person.name();
      var avatarUrl = person.avatarUrl();
      if (avatarUrl) {
        fetch(avatarUrl)
          .then(response => {
            response
              .arrayBuffer()
              .then(buffer => {
                this.setState({
                  person: {
                    username,
                    name,
                    avatarUrl: URL.createObjectURL(
                      new Blob([new Uint8Array(buffer)], { type: 'image' })
                    )
                  }
                });
              })
              .catch(err => {
                console.error(err);
                this.setState({ person: { username, name, avatarUrl: null } });
              });
          })
          .catch(err => {
            console.error(err);
            this.setState({ person: { username, name, avatarUrl: null } });
          });
      } else {
        this.setState({ person: { username, name, avatarUrl: null } });
      }
    }
  }

  render() {
    let username =
      this.state.person && this.state.person.name
        ? this.state.person.name
        : this.props.userSession.loadUserData().username;
    let userImage =
      this.state.person && this.state.person.avatarUrl
        ? this.state.person.avatarUrl
        : './avatar-placeholder.png';
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
        <Link className="navbar-brand" to="/">
          Fifteen Puzzle
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {username}
            </Link>
          </li>
        </ul>
        <img src={userImage} className="avatar" width="25" height="25" alt={username} />
        <button className="btn btn-primary" onClick={this.props.signOut}>
          Sign out
        </button>
      </nav>
    );
  }
}

export default NavBar;
