import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {testFunction} from './App';
import {expect, test} from '@jest/globals'

test('should return All Good for the example jest test', () => {
  let result = testFunction()
  expect(result).toEqual("All Good")
});