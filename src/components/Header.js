import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-ligth">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {this.props.appName.toLowerCase()}
                    </Link>

                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Login" className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>            
        );
    }
}

export default Header;