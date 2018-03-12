import React, { Component } from 'react';
import './HeaderNav.css';

class HeaderNav extends Component {

  render() {
    return (
      <div className="module-group right">
        <div className="module left">
          <HeaderNavMenu class="menu">
            <HeaderNavLink to="#" label="Home" />
            <HeaderNavLink to="#" label="About" class="has-dropdown">
              <HeaderNavMenu class="mega-menu">
                <HeaderNavLink>
                  <HeaderNavMenu>
                    <HeaderNavLink label="Concepts" />
                    <HeaderNavLink to="#" label="Our Company" />
                    <HeaderNavLink to="#" label="Our Team" />
                    <HeaderNavLink to="#" label="Our Process" />
                  </HeaderNavMenu>
                </HeaderNavLink>
                <HeaderNavLink>
                  <HeaderNavMenu>
                    <HeaderNavLink label="Concepts 1" />
                    <HeaderNavLink to="#" label="Our Company" />
                    <HeaderNavLink to="#" label="Our Team" />
                    <HeaderNavLink to="#" label="Our Process" />
                  </HeaderNavMenu>
                </HeaderNavLink>
              </HeaderNavMenu>
            </HeaderNavLink>
            <HeaderNavLink to="#" label="Pages"  class="has-dropdown">
              <HeaderNavMenu>
                <HeaderNavLink to="#" label="Our Company" />
                <HeaderNavLink to="#" label="Our Team" />
                <HeaderNavLink to="#" label="Our Process" />
              </HeaderNavMenu>
            </HeaderNavLink>
            <HeaderNavLink to="#" label="Elements" />
            <HeaderNavLink to="#" label="Portfolio" />
            <HeaderNavLink to="#" label="Shop" />
            <HeaderNavLink to="#" label="Blog" />
          </HeaderNavMenu>
        </div>
      </div>
    )
  }

}

const HeaderNavMenu = (props) =>
  <ul className={props.class}>
    {props.children}
  </ul>

const HeaderNavLink = (props) =>
  <li className={props.class}>
    <Link href={props.to} label={props.label} />
    {props.children}
  </li>

const Link = function(props) {
    // if it is a Link
    if(props.href && props.label) {
      return (
        <a href={props.href}>{props.label}</a>
      )
    }

    // if it is a title
    if(props.label && !props.href) {
      return (
        <span className="title">{props.label}</span>
      )
    }

    return null;
}

export default HeaderNav;
