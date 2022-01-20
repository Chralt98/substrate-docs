import cx from 'classnames'

import React from 'react'
import navigation from '../../../content/docs/navigation.yaml'
import Link from '../default/Link'

const ChildMenu = ({ pages, currentPath }) => {
  return (
    <ul className="p-0 m-0 pl-3 py-1">
      {pages.map((page, index) => {
        return (
          <li
            key={index}
            className={cx('p-0 m-0 list-none text-sm font-medium', {
              'text-gray-500': currentPath !== page.url,
              'text-substrateBlue': currentPath === page.url,
            })}
          >
            {page.url ? (
              <Link to={page.url}>{page.title}</Link>
            ) : (
              `${page.title}`
            )}
          </li>
        )
      })}
    </ul>
  )
}

const SubMenu = ({ pages, currentPath }) => {
  return (
    <ul className="p-0 m-0 pl-3">
      {pages.map((page, index) => {
        return (
          <li
            key={index}
            className={cx('p-0 m-0 list-none font-medium', {
              'text-substrateDark dark:text-white': currentPath !== page.url,
              'text-substrateBlue': currentPath === page.url,
            })}
          >
            {page.url ? (
              <Link to={page.url}>{page.title}</Link>
            ) : (
              `${page.title}`
            )}
            {page.pages && (
              <ChildMenu pages={page.pages} currentPath={currentPath} />
            )}
          </li>
        )
      })}
    </ul>
  )
}

const Menu = ({ currentPath }) => {
  const { pages } = navigation
  return (
    <nav role="navigation">
      <ul className="p-0 m-0">
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={cx('p-0 m-0 list-none font-semibold', {
                'text-substrateBlue': currentPath === page.url,
              })}
            >
              <span className="inline-block py-3">
                {page.url ? (
                  <Link to={page.url}>{page.title}</Link>
                ) : (
                  `${page.title}`
                )}
              </span>
              {page.pages && (
                <SubMenu pages={page.pages} currentPath={currentPath} />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const NavDocs = ({ currentPath }) => {
  return <Menu currentPath={currentPath} />
}

export default NavDocs
