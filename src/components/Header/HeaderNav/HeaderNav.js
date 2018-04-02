import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HeaderNav.scss'

class HeaderNav extends Component {
  render () {
    const nav = this.props.navItems

    const navItems = nav.map((item, index) => (
      <HeaderNavLink
        to={item.link}
        label={item.title}
        key={index}
        class={item.class}
        items={item.items}
      />
    ))

    if (nav) {
      return (
        <div className='module-group right'>
          <div className='module left'>
            <ul className='menu'>
              {navItems}
            </ul>
          </div>
        </div>
      )
    }
  }
}

const HeaderNavLink = (props) =>
  <li className={props.class}>
    <Link href={props.to} label={props.label}/>
    <SubMenu items={props.items} />
  </li>

HeaderNavLink.propTypes = {
  class: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.object
}

const SubMenu = function (props) {
  const items = props.items
  if (items) {
    // Check if there is two items, so it will be mega menu
    const ulClass = (items[1].items) ? 'mega-menu' : null
    return (
      <ul className={ulClass}>
        {items.map((item, index) => (
          <HeaderNavLink
            to={item.link}
            label={item.title}
            key={index}
            class={item.class}
            items={item.items}
          />
        ))}
      </ul>
    )
  }
  return null
}

SubMenu.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

const Link = function (props) {
  // if it is a Link
  if (props.href && props.label) {
    return (
      <a href={props.href}>{props.label}</a>
    )
  }

  // if it is a title
  if (props.label && !props.href) {
    return (
      <span className='title'>{props.label}</span>
    )
  }
  return null
}

Link.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string
}

export default HeaderNav
