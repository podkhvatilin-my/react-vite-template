import type { ButtonProps } from './types';

import classes from './styles.module.scss';

export function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <button type="button" className={classes.root}>
      {children}
    </button>
  );
}
