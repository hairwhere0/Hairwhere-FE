import styles from './loadingSpinner.module.css';

type Props = {
  size?: 'small' | 'medium' | 'large';
}

export default function LoadingSpinner({ size='medium' }: Props) {
  return (
    <div className={`${styles.spinnerContainer} ${styles[size]}`}>
      <div className={styles.spinner}></div>
    </div>
  )
}
