import style from './header.module.css'

import IgniteLogo from '../img/ignite-logo.svg'

export function Header () {
  return <header className={style.header}>
    <img src={IgniteLogo} alt="Logo-Ignite" />
  </header>
}