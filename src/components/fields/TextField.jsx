import styles from '@/styles/components/fields/TextField.module.css';
import clsx from 'clsx';
export const TextField = ({ Icon, className, disableMargin, value, ...inputProps }) => {
  return (
    <input
      value={value}
      type="text"
      className={clsx(className, styles.input, disableMargin && styles.disableMargin)}
      {...inputProps}
    />
  );
};

export const TextArea = ({ Icon, className, disableMargin, value, ...inputProps }) => {
  return (
    <textarea
      value={value}
      type="text"
      className={clsx(className, styles.input, disableMargin && styles.disableMargin)}
      {...inputProps}
    />
  );
};
