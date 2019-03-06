/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../App';
import VehicleFactory from '../VehicleFactory'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('vehicleFactory_withCarOptions_AlwaysReturnsCar', () => {
  var factory = new VehicleFactory();
  var car = factory.createNewVehicle( {
    vehicleType: "car",
    color: "yellow",
    doors: 6 } );
  expect(car).toEqual({color: "yellow",
  doors: 6});
});