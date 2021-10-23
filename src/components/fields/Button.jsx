import styles from '@/styles/components/fields/Button.module.css';
import clsx from 'clsx';
export const Button = ({ children, className, ...props }) => {
  return (
    <button className={clsx(className, styles.button)} {...props}>
      {children}
    </button>
  );
};
