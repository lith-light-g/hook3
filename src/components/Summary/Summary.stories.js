import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Summary from './Summary';
import Container from '../Container';
import i18n from '../../i18n';

export const props = {
  athleteId: 28445856,
  longestRun: {
    id: 1860198287,
    name:
      "Paris Vershype 16km oklm avec Jarvis (à part Karim), et des types qu'on aime pas mais qu'on tolère quand même",
    distance: 16337.6,
    start_date: '2018-09-23T08:54:30Z',
  },
  biggestFan: {
    id: 2719443,
    firstname: 'caroline',
    lastname: 'chupin',
    profile:
      'https://dgalywyr863hv.cloudfront.net/pictures/athletes/2719443/9220373/1/large.jpg',
    kudosCount: 29,
  },
  totalRuns: {
    count: 39,
    distance: 372262,
    moving_time: 128538,
    elapsed_time: 132520,
    elevation_gain: 5487,
  },
  topKudosers: [
    { id: 2719443, firstname: 'caroline', lastname: 'chupin', kudosCount: 29 },
    { id: 29813127, firstname: 'Alexis', lastname: 'Louart', kudosCount: 22 },
    {
      id: 22888162,
      firstname: 'Frédéric',
      lastname: "Planch's",
      kudosCount: 14,
    },
    { id: 32581967, firstname: 'Omar', lastname: 'Mellouli', kudosCount: 9 },
    { id: 27166802, firstname: 'karim', lastname: 'mansoura', kudosCount: 8 },
    { id: 114328, firstname: 'Max', lastname: 'BELLENGER', kudosCount: 7 },
    { id: 15530194, firstname: 'Kevin', lastname: 'Seysen', kudosCount: 7 },
    { id: 25804767, firstname: 'John', lastname: 'Taupin', kudosCount: 1 },
    {
      id: 31271337,
      firstname: 'Maxime',
      lastname: 'Lefrancois',
      kudosCount: 1,
    },
  ],
  matchingRunsBySegmentGroups: {
    '1418692812': [
      {
        distance: 5615.5,
        name: 'Lunch Run',
        id: 1418692812,
        start_date: '2018-02-21T11:20:53Z',
      },
      {
        distance: 8955.6,
        name: 'Parc de Nanterre mon frère ',
        id: 1450775497,
        start_date: '2018-03-13T11:32:40Z',
      },
      {
        distance: 8631.6,
        name: 'Nanterre mon frère ',
        id: 1465575891,
        start_date: '2018-03-22T11:19:42Z',
      },
      {
        distance: 9112.9,
        name: 'Nanterre mon frère ',
        id: 1472741289,
        start_date: '2018-03-26T10:15:22Z',
      },
      {
        distance: 7075.2,
        name: 'Lunch Run',
        id: 1486900857,
        start_date: '2018-04-03T10:15:55Z',
      },
      {
        distance: 6969.7,
        name: 'Lunch Run',
        id: 1503912745,
        start_date: '2018-04-12T10:30:31Z',
      },
      {
        distance: 9113.5,
        name: 'Jarvis🐵',
        id: 1513533402,
        start_date: '2018-04-17T10:11:18Z',
      },
      {
        distance: 8203.3,
        name: 'Nanterre avec la team Metabot',
        id: 1618383989,
        start_date: '2018-06-05T10:15:10Z',
      },
      {
        distance: 11107.5,
        name: 'Quatre Tours ft. Melloulite',
        id: 1693044259,
        start_date: '2018-07-10T10:22:13Z',
      },
      {
        distance: 8159.7,
        name: 'Endurance Fion damentale',
        id: 1744562884,
        start_date: '2018-08-02T10:37:28Z',
      },
      {
        distance: 8586.6,
        name: 'To The Dome ft Mamar & Pablo',
        id: 1897847832,
        start_date: '2018-10-11T10:18:57Z',
      },
      {
        distance: 11101.1,
        name: 'Cuatro avec Jarvis + Marvin',
        id: 1952881385,
        start_date: '2018-11-08T11:15:37Z',
      },
      {
        distance: 11168.7,
        name: '4',
        id: 1965905852,
        start_date: '2018-11-15T11:15:09Z',
      },
      {
        distance: 11183.5,
        name: 'Sanic',
        id: 1978589855,
        start_date: '2018-11-22T11:15:56Z',
      },
    ],
    '1431182956': [
      {
        distance: 5352,
        name: 'Lunch Run',
        id: 1431182956,
        start_date: '2018-03-01T11:30:59Z',
      },
      {
        distance: 8028.7,
        name: 'To The Dome',
        id: 1883335730,
        start_date: '2018-10-04T10:26:20Z',
      },
      {
        distance: 10799.7,
        name: 'Quatre Tours ft Pablo & iPhoneMan',
        id: 1912140978,
        start_date: '2018-10-18T10:21:05Z',
      },
    ],
    '1443766020': [
      {
        distance: 9559.6,
        name: 'Bois de boulove avec Coach Karime',
        id: 1443766020,
        start_date: '2018-03-09T11:19:40Z',
      },
      {
        distance: 8029.6,
        name: 'Bois de boulove avec Karim',
        id: 1532638722,
        start_date: '2018-04-26T10:23:47Z',
      },
      {
        distance: 8006.1,
        name: 'Bois de boulove en solo 😔😅',
        id: 1577567231,
        start_date: '2018-05-17T10:16:16Z',
      },
      {
        distance: 7929.8,
        name: 'Bois de boulove ',
        id: 1590602745,
        start_date: '2018-05-23T10:40:22Z',
      },
      {
        distance: 10020.6,
        name: 'Bois de boulove avec la team ',
        id: 1605518677,
        start_date: '2018-05-30T10:11:38Z',
      },
      {
        distance: 7224,
        name: 'Bois de boulove mais fatigué ',
        id: 1622787594,
        start_date: '2018-06-07T10:28:07Z',
      },
      {
        distance: 8027.8,
        name: 'Bois de boulove ',
        id: 1637739920,
        start_date: '2018-06-14T10:26:02Z',
      },
      {
        distance: 10043.5,
        name: 'Bois de boulove avec Coach AKarim-47',
        id: 1648117042,
        start_date: '2018-06-19T10:21:44Z',
      },
      {
        distance: 9028.2,
        name: 'Bois de boulove avec ABDL K',
        id: 1667430459,
        start_date: '2018-06-28T10:27:47Z',
      },
      {
        distance: 7743.7,
        name: 'Bois de bourré ',
        id: 1712820942,
        start_date: '2018-07-19T10:31:01Z',
      },
      {
        distance: 7783.2,
        name: 'Bois de Bourré',
        id: 1712912059,
        start_date: '2018-07-19T10:31:17Z',
      },
      {
        distance: 9025.4,
        name: 'Bois de boulove en mode Calor++',
        id: 1728807696,
        start_date: '2018-07-26T10:33:55Z',
      },
      {
        distance: 10065.9,
        name: '【水野】🌊RIDER-021',
        id: 1762385118,
        start_date: '2018-08-10T10:27:18Z',
      },
      {
        distance: 10419.6,
        name: 'Bois de boulove avec Mellouly en mode frôle la crise cardiaque',
        id: 1769070646,
        start_date: '2018-08-13T10:36:54Z',
      },
      {
        distance: 9057.7,
        name: 'Bois de boulove avec AK47',
        id: 1791785106,
        start_date: '2018-08-23T10:10:09Z',
      },
      {
        distance: 10051.4,
        name: 'Bois de boulove avec Team Korba',
        id: 1805038618,
        start_date: '2018-08-29T10:22:40Z',
      },
      {
        distance: 10007.6,
        name: 'Bois de boulove avec la team + Fred',
        id: 1926257635,
        start_date: '2018-10-25T10:06:32Z',
      },
      {
        distance: 12540.5,
        name: 'Mon vieil ami le bois de boulove',
        id: 1990920713,
        start_date: '2018-11-29T11:17:47Z',
      },
    ],
    '1551726651': [
      {
        distance: 13713.3,
        name: "L'allée royale / carré sénart",
        id: 1551726651,
        start_date: '2018-05-05T16:29:05Z',
      },
      {
        distance: 13456.8,
        name: 'Allée royale  / carré sénart ',
        id: 1566742747,
        start_date: '2018-05-12T10:10:01Z',
      },
      {
        distance: 14018.2,
        name: '🌧 Allée Royale 🌧 Carré Sénart 🌧',
        id: 1939664025,
        start_date: '2018-11-01T14:12:44Z',
      },
    ],
    '1577567231': [
      {
        distance: 10025,
        name: 'Fractionné avec la FNTP',
        id: 1677878473,
        start_date: '2018-07-03T10:19:23Z',
      },
    ],
    '1860198287': [
      {
        distance: 16337.6,
        name:
          "Paris Vershype 16km oklm avec Jarvis (à part Karim), et des types qu'on aime pas mais qu'on tolère quand même",
        id: 1860198287,
        start_date: '2018-09-23T08:54:30Z',
      },
    ],
  },
  matchingRunsByHighestBestEfforts: {
    '400': [],
    '805': [],
    '1000': [],
    '1609': [],
    '3219': [],
    '5000': [
      {
        start_date: '2018-02-21T11:20:53Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-03-01T11:30:59Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-03-09T11:19:40Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-03-13T11:32:40Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-03-22T11:19:42Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-03-26T10:15:22Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-04-03T10:15:55Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-04-12T10:30:31Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-04-17T10:11:18Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-04-26T10:23:47Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-05-17T10:16:16Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-05-23T10:40:22Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-06-05T10:15:10Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-06-07T10:28:07Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-06-14T10:26:02Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-06-28T10:27:47Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-07-19T10:31:01Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-07-19T10:31:17Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-07-26T10:33:55Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-08-02T10:37:28Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-08-23T10:10:09Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-10-04T10:26:20Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
      {
        start_date: '2018-10-11T10:18:57Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
        ],
      },
    ],
    '10000': [
      {
        start_date: '2018-05-05T16:29:05Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-05-12T10:10:01Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-05-30T10:11:38Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-06-19T10:21:44Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-07-03T10:19:23Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-07-10T10:22:13Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-08-10T10:27:18Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-08-13T10:36:54Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-08-29T10:22:40Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-10-18T10:21:05Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-10-25T10:06:32Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-11-01T14:12:44Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-11-08T11:15:37Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-11-15T11:15:09Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-11-22T11:15:56Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
      {
        start_date: '2018-11-29T11:17:47Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
        ],
      },
    ],
    '15000': [],
    '16090': [
      {
        start_date: '2018-09-23T08:54:30Z',
        best_efforts: [
          { name: '400m', distance: 400 },
          { name: '1/2 mile', distance: 805 },
          { name: '1k', distance: 1000 },
          { name: '1 mile', distance: 1609 },
          { name: '2 mile', distance: 3219 },
          { name: '5k', distance: 5000 },
          { name: '10k', distance: 10000 },
          { name: '15k', distance: 15000 },
          { name: '10 mile', distance: 16090 },
        ],
      },
    ],
  },
  matchingRunsByBestEfforts: {},
  matchingRunsBySegments: {},
};

storiesOf('Screen: Summary', module)
  .addDecorator((story, context) =>
    withConsole()(() => (
      <IntlProvider locale="en-US" messages={i18n['en-US']}>
        <Container>{story()}</Container>
      </IntlProvider>
    ))(context)
  )
  .add('default', () => <Summary {...props} />);
