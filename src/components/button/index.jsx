import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './button.module.scss';

export const Button = ({
  format = 'primary',
  href = null,
  as = null,
  type = 'button',
  children,
  onClick,
  disabled = false,
  target = null,
  small = false,
}) => {
  if (href && target) {
    return (
      <a
        href={href}
        target={target}
        className={classnames(
          styles.btn,
          styles[format],
          small && styles.small
        )}
        onClick={onClick}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} as={as}>
        <a
          className={classnames(
            styles.btn,
            styles[format],
            small && styles.small
          )}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={classnames(styles.btn, styles[format], small && styles.small)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
