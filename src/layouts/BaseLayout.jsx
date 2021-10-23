import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/layouts/BaseLayout.module.css';
import Link from 'next/link';
import menu from '@/constants/menu';
import clsx from 'clsx';
const BaseLayout = ({ children, imageUrl }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <AppHeader />
        <img className={styles.rectangleOrnament} src="/svg/ornament.svg" />
        <div className={styles.innerContainer}>
          <FloatingImage imageUrl={imageUrl} />
          <main className="flex-1" style={{ paddingTop: 16 }}>
            {children}
          </main>

          <nav className={styles.navBar}>
            <div className={styles.navBarInner}>
              {menu.map(({ icon, title, id, url }) => {
                return <NavBarItem key={id} url={url} isActive={url === pathname} icon={icon} title={title} />;
              })}
            </div>
          </nav>
        </div>
        <footer
          style={{ color: 'var(--secondary-text)', padding: 32, marginTop: 8, fontSize: 12 }}
          className="flex-center"
        >
          Copyright 2021 62Trade.com PT. Enam Dua Niaga
        </footer>
      </div>
    </div>
  );
};

const AppHeader = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      console.log(window.pageYOffset);
      if (window.pageYOffset <= 5) {
        setIsTop(true);
      }

      if (window.pageYOffset > 5) {
        setIsTop(false);
      }
    };
  }, []);
  return (
    <div className={clsx(styles.appHeader, !isTop && styles.headerSticky)}>
      <div className="flex-center">
        <img src="/svg/logo.svg" className={styles.logo} />
        <h4>Logo here</h4>
      </div>
      <span className={styles.subtitle}>Resourceful Indonesia</span>
    </div>
  );
};

const NavBarItem = ({ icon, title, isActive, url }) => {
  return (
    <Link href={url}>
      <div className={clsx(isActive && styles.navBarItemSelected, styles.navBarItem)}>
        {icon?.({ fill: isActive ? 'white' : '#3e2e83' })}
        <small className={styles.iconLabel}>{title}</small>
      </div>
    </Link>
  );
};

const FloatingImage = ({ imageUrl }) => {
  return (
    <section className={styles.floatingImage}>
      <img src={imageUrl} alt="main-image" className={styles.image} />
    </section>
  );
};

export default BaseLayout;
