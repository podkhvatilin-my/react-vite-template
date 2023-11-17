import type { ButtonProps } from './Button.types';

import classes from './Button.styles.module.scss';

export function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <button type="button" className={classes.root}>
      {children}
    </button>
  );
}
