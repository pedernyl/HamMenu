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
          colors: {
            navBg: 'color for the background of navbar',
            textColor: 'color for the text inside navbar',
            borderColor: 'set to color for border - if no border just dont send this prop'
          }

 */

export default function HamMenu({ settings })  {

    const [isMenuOpen, setMenuToggled] = useState(false);
    const toggleTrueFalse = () => setMenuToggled(!isMenuOpen);
    //check if menu closed
    const menuItemsClass = isMenuOpen ? styles.menuItems : styles.hidden;

    let menuItems = [];
    let i = 0;
    //generate the menu items
    settings.links.forEach((item) => {

        menuItems.push(
           <li
               key={i++ +'listmenuitem'}
               className={styles.menuItem}
           >
             <Link href={item.href}>
                 <a>{item.name}</a>
             </Link>
           </li>

        );
    });
    const black = '#000';
    return (
        <nav className={styles.flexContainer + ' ' + 'userProperties'}>
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
        <style jsx>{`
        .userProperties {
          background: ${settings.colors.navBg !== undefined ? settings.colors.navBg : '#333'};
          color: ${settings.colors.textColor !== undefined ? settings.colors.textColor : '#fff'};
          border: ${settings.colors.borderColor !== undefined ? 
            settings.colors.borderColor + ' 1px solid' :
            'none'};
        }
        `}</style>
        </nav>
    );
}