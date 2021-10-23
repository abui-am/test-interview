import { useRouter } from 'next/router';
import React from 'react';
import styles from '@/styles/components/layouts/BaseLayout.module.css';
import Link from 'next/link';
import menu from '@/constants/menu';
import clsx from 'clsx';
const BaseLayout = ({ children, imageUrl }) => {
  const { pathname } = useRouter();

  return (
    <div className="flex-center">
      <div className={styles.container}>
        <AppHeader />
        <img className={styles.rectangleOrnament} src="/svg/ornament.svg" />
        <div className="flex-center" style={{ alignItems: 'start', flex: 1 }}>
          <FloatingImage imageUrl={imageUrl} />
          <main className="flex-1" style={{ paddingTop: 16 }}>
            {children}
          </main>
          <nav className={styles.navBar}>
            {menu.map(({ icon, title, id, url }) => {
              return <NavBarItem key={id} url={url} isActive={url === pathname} icon={icon} title={title} />;
            })}
          </nav>
        </div>
        <footer style={{ color: 'var(--secondary-text)', padding: 32, fontSize: 12 }} className="flex-center">
          Copyright 2021 62Trade.com PT. Enam Dua Niaga
        </footer>
      </div>
    </div>
  );
};

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <div className="flex-center">
        <img src="/svg/logo.svg" style={{ marginRight: 12 }} />
        <h4>Logo here</h4>
      </div>
      <span className="color-primary">Resourceful Indonesia</span>
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