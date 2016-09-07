import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { action } from '@kadira/storybook-addon-actions';
import {
  withKnobs,
  number,
  object,
  boolean,
  text,
} from '../../src';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator((story, context) => (withKnobs(story)(context)))
  .add('default view', () => (
    <Button
      onClick={ action('button clicked') }
      disabled={ boolean('Disabled', false) }
      width={ number('Width', 100) }
      style={ object('Style', { backgroundColor: '#EAEAEA' }) }
    >
      { text('Label', 'Hello') } World
    </Button>
  ))
  .add('Story without any knobs', () => (
    <Button>{text('Label', 'Hello')}</Button>
  ));
