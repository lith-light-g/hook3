import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import RunComparison from './RunComparison';
import Container from '../Container';
import SelectedItemProvider from '../../contexts/SelectedItemProvider';
import i18n from '../../i18n';

const runs = [
  {
    id: 1431182956,
    name: 'Lunch Run',
    distance: 5352,
    start_date: '2018-03-01T11:30:59Z',
    average_speed: 2.904,
    max_speed: 7.8,
    splits_metric: [
      {
        distance: 1001.3,
        elapsed_time: 329,
        elevation_difference: -7.5,
        moving_time: 320,
        split: 1,
        average_speed: 3.13,
        pace_zone: 0,
      },
      {
        distance: 1004.6,
        elapsed_time: 334,
        elevation_difference: -10.9,
        moving_time: 334,
        split: 2,
        average_speed: 3.01,
        pace_zone: 0,
      },
      {
        distance: 999.2,
        elapsed_time: 368,
        elevation_difference: 15.6,
        moving_time: 356,
        split: 3,
        average_speed: 2.81,
        pace_zone: 0,
      },
      {
        distance: 999.8,
        elapsed_time: 331,
        elevation_difference: -16.3,
        moving_time: 331,
        split: 4,
        average_speed: 3.02,
        pace_zone: 0,
      },
      {
        distance: 996.6,
        elapsed_time: 353,
        elevation_difference: 8.8,
        moving_time: 338,
        split: 5,
        average_speed: 2.95,
        pace_zone: 0,
      },
      {
        distance: 350.5,
        elapsed_time: 127,
        elevation_difference: 4.2,
        moving_time: 117,
        split: 6,
        average_speed: 3,
        pace_zone: 0,
      },
    ],
  },
  {
    id: 1883335730,
    name: 'To The Dome',
    distance: 8028.7,
    start_date: '2018-10-04T10:26:20Z',
    average_speed: 2.936,
    max_speed: 7.9,
    splits_metric: [
      {
        distance: 1005.5,
        elapsed_time: 388,
        elevation_difference: -15.4,
        moving_time: 361,
        split: 1,
        average_speed: 2.79,
        pace_zone: 0,
      },
      {
        distance: 997.7,
        elapsed_time: 341,
        elevation_difference: 0.5,
        moving_time: 341,
        split: 2,
        average_speed: 2.93,
        pace_zone: 0,
      },
      {
        distance: 998,
        elapsed_time: 351,
        elevation_difference: 5.3,
        moving_time: 345,
        split: 3,
        average_speed: 2.89,
        pace_zone: 0,
      },
      {
        distance: 1004.5,
        elapsed_time: 313,
        elevation_difference: -13.8,
        moving_time: 313,
        split: 4,
        average_speed: 3.21,
        pace_zone: 0,
      },
      {
        distance: 996.3,
        elapsed_time: 340,
        elevation_difference: 21,
        moving_time: 326,
        split: 5,
        average_speed: 3.06,
        pace_zone: 0,
      },
      {
        distance: 1000.8,
        elapsed_time: 314,
        elevation_difference: -16.7,
        moving_time: 314,
        split: 6,
        average_speed: 3.19,
        pace_zone: 0,
      },
      {
        distance: 1002.9,
        elapsed_time: 376,
        elevation_difference: 15.7,
        moving_time: 368,
        split: 7,
        average_speed: 2.73,
        pace_zone: 0,
      },
      {
        distance: 998.9,
        elapsed_time: 360,
        elevation_difference: -0.1,
        moving_time: 356,
        split: 8,
        average_speed: 2.81,
        pace_zone: 0,
      },
      {
        distance: 24.1,
        elapsed_time: 11,
        elevation_difference: -0.9,
        moving_time: 11,
        split: 9,
        average_speed: 2.19,
        pace_zone: 0,
      },
    ],
  },
  {
    id: 1912140978,
    name: 'Quatre Tours ft Pablo & iPhoneMan',
    distance: 10799.7,
    start_date: '2018-10-18T10:21:05Z',
    average_speed: 2.946,
    max_speed: 6.9,
    splits_metric: [
      {
        distance: 1002.1,
        elapsed_time: 345,
        elevation_difference: -11.1,
        moving_time: 345,
        split: 1,
        average_speed: 2.9,
        pace_zone: 0,
      },
      {
        distance: 1001.2,
        elapsed_time: 377,
        elevation_difference: -5.2,
        moving_time: 377,
        split: 2,
        average_speed: 2.66,
        pace_zone: 0,
      },
      {
        distance: 997.9,
        elapsed_time: 354,
        elevation_difference: -4,
        moving_time: 341,
        split: 3,
        average_speed: 2.93,
        pace_zone: 0,
      },
      {
        distance: 1000,
        elapsed_time: 313,
        elevation_difference: 9,
        moving_time: 313,
        split: 4,
        average_speed: 3.19,
        pace_zone: 0,
      },
      {
        distance: 1001.4,
        elapsed_time: 358,
        elevation_difference: -4.8,
        moving_time: 346,
        split: 5,
        average_speed: 2.89,
        pace_zone: 0,
      },
      {
        distance: 999.6,
        elapsed_time: 314,
        elevation_difference: 1.4,
        moving_time: 314,
        split: 6,
        average_speed: 3.18,
        pace_zone: 0,
      },
      {
        distance: 1000.1,
        elapsed_time: 316,
        elevation_difference: -0.6,
        moving_time: 316,
        split: 7,
        average_speed: 3.16,
        pace_zone: 0,
      },
      {
        distance: 1001.2,
        elapsed_time: 343,
        elevation_difference: -0.9,
        moving_time: 343,
        split: 8,
        average_speed: 2.92,
        pace_zone: 0,
      },
      {
        distance: 998.1,
        elapsed_time: 337,
        elevation_difference: 0.3,
        moving_time: 337,
        split: 9,
        average_speed: 2.96,
        pace_zone: 0,
      },
      {
        distance: 999.9,
        elapsed_time: 364,
        elevation_difference: 8.6,
        moving_time: 357,
        split: 10,
        average_speed: 2.8,
        pace_zone: 0,
      },
      {
        distance: 798.2,
        elapsed_time: 277,
        elevation_difference: -4.1,
        moving_time: 277,
        split: 11,
        average_speed: 2.88,
        pace_zone: 0,
      },
    ],
  },
];

export const props = {
  title: 'Run title',
  type: 'SEGMENT_GROUP',
  runs,
};

storiesOf('Screen: Run Comparison', module)
  .addDecorator((story, context) =>
    withConsole()(() => (
      <IntlProvider locale="en-US" messages={i18n['en-US']}>
        <SelectedItemProvider>
          <Container>{story()}</Container>
        </SelectedItemProvider>
      </IntlProvider>
    ))(context)
  )
  .add('default', () => <RunComparison {...props} />);
