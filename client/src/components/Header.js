import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Log In With Google</a></li>;
            default:
                return <li><a href="/api/logout">LogOut</a></li>;
        }
    }
    render(){
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Idea Pop
                    </Link>
                    <ul className="right">
                        <li>
                            <a>
                                {this.renderContent()}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
}

function mapStatetoProps({ auth }){
    return { auth };
}
export default connect(mapStatetoProps)(Header);