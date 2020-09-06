import Link from 'next/link';
import { useState } from 'react';

import styles from './styles.module.css';
/*
    Settings Props:
      Shall have following format:
        settings: {
          links: [
            {
              name: 'name of link',
              href: 'url to link'
            }
          ],

 */

export default function HamMenu({links})  {

    const [isMenuOpen, setMenuToggled] = useState(false);
    const toggleTrueFalse = () => setMenuToggled(!isMenuOpen);
    //check if menu closed
    const menuItemsClass = isMenuOpen ? styles.menuItems : styles.hidden;

    //console.log(window.innerHeight);

    let menuItems = [];
    let i = 0;
    //generate the menu items
    links.forEach((item) => {

        menuItems.push(
           <li
               key={i+'listmenuitem'}
               className={styles.menuItem}
           >
             <Link href={item.href}>
                 <a>{item.name}</a>
             </Link>
           </li>
        );
    });
    return (
        <nav className={styles.flexContainer}>
            {/* hamburger icon */}
            <div onClick={toggleTrueFalse}>
                <div className={styles.item}>
                </div>
                <div className={styles.item}>
                </div>
                <div className={styles.item}>
                </div>
            </div>
            <ul className={menuItemsClass}>
                {menuItems}
            </ul>

        </nav>
    );
}