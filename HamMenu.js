import Link from 'next/link';
import { useState } from 'react';

import styles from './styles.module.css';

export default function HamMenu({links})  {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    let menuItems = [];
    let i = 0;
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
        <nav className={styles.flexContainer} onClick={toggleTrueFalse}>
            {/* hamburger icon */}
            <div className={styles.item}>
            </div>
            <div className={styles.item}>
            </div>
            <div className={styles.item}>
            </div>
            <ul className={styles.menuItems}>
                { isToggled ? 'kuk' : 'nokuk'}
                {menuItems}
            </ul>

        </nav>
    );
}