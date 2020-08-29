import Link from 'next/link';

import styles from './styles.module.css';

export default function HamMenu({links})  {

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
        <nav className={styles.flexContainer}>
            {/* hamburger icon */}
            <div className={styles.item}>
            </div>
            <div className={styles.item}>
            </div>
            <div className={styles.item}>
            </div>
            <ul className={styles.menuItems}>
                {menuItems}
            </ul>

        </nav>
    );
}