import Link from 'next/link';

import styles from './styles.module.css';

export default function HamMenu({links})  {

    let menuItems = [];
    let i = 0;
    links.forEach((item) => {

        menuItems.push(
           <li key={i+'listmenuitem'}>
             <Link href={item.href}>
                 <a>{item.name}</a>
             </Link>
           </li>
        );
    });
    return (
        <nav className="container">
            navigation
            <ul>
                {menuItems}
            </ul>

        </nav>
    );
}