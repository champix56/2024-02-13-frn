/**
 * @format
 */

import 'react-native';
import React from 'react';
import TemplateName from './TemplateName';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

it('templateName renders correctly', () => {
  renderer.create(
    <TemplateName>
      <Text>Hello</Text>
    </TemplateName>,
  );
});
