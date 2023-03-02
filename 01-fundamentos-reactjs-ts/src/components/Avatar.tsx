import {ImgHTMLAttributes} from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

// Utilizando de desestruturação para aplicar um valor inicial no atributo hasBorder
export function Avatar({hasBorder = true, ...props}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
