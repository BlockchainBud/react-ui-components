import React, { Component } from 'react';
import './HeaderNav.css';

class HeaderNav extends Component {

  render() {
    return (
      <div className="module right">
        <HeaderNavMenu class="menu">
          <HeaderNavLink to="#" label="Home" />
          <HeaderNavLink to="#" label="About">
            <HeaderNavMenu class="sub-menu">
              <HeaderNavLink to="#" label="Our Company" />
              <HeaderNavLink to="#" label="Our Team" />
              <HeaderNavLink to="#" label="Our Process" />
            </HeaderNavMenu>
          </HeaderNavLink>
          <HeaderNavLink to="#" label="Blog" />
        </HeaderNavMenu>
      </div>
    )
  }

}

const HeaderNavLink = (props) =>
  <li className={props.class}>
    <a href={props.to}>{props.label}</a>
    {props.children}
  </li>

const HeaderNavMenu = (props) =>
  <ul className={props.class}>
    {props.children}
  </ul>

export default HeaderNav;
