import React from 'react';

import Button from './Button';
import { PauseIcon } from './icons';

const Pause = props =>
  <Button {...props}>
    <PauseIcon />
  </Button>

export default Pause;
