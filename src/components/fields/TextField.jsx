import styles from '@/styles/components/fields/TextField.module.css';
import clsx from 'clsx';
export const TextField = ({ Icon, className, disableMargin, ...inputProps }) => {
  return (
    <input
      type="text"
      className={clsx(className, styles.input, disableMargin && styles.disableMargin)}
      {...inputProps}
    />
  );
};

export const TextArea = ({ Icon, className, disableMargin, ...inputProps }) => {
  return (
    <textarea
      type="text"
      className={clsx(className, styles.input, disableMargin && styles.disableMargin)}
      {...inputProps}
    />
  );
};
