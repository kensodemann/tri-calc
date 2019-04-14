import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';
import { Triangle } from '../../models/triangle';

describe('CalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('is created', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service).toBeTruthy();
  });

  [
    {
      name: '30, 60, 90',
      angle: (30 * Math.PI) / 180.0,
      oppositeAngle: (60 * Math.PI) / 180.0,
      adjacent: 5.196152422706632,
      opposite: 3,
      hypotenuse: 6,
      area: 7.794228634059948
    },
    {
      name: '45, 45, 90',
      angle: (45 * Math.PI) / 180.0,
      oppositeAngle: (45 * Math.PI) / 180.0,
      adjacent: 3,
      opposite: 3,
      hypotenuse: 4.242640687119285,
      area: 4.5
    }
  ].forEach(t => {
    describe(`right triangle (${t.name})`, () => {
      it('throws an error if no parameters are specified', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        expect(() => service.triangle({})).toThrowError(
          'two (and only two) parameters of the triangle must be specified'
        );
      });

      it('throws an error if only one parameter is specified', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        expect(() => service.triangle({ angle: Math.PI / 4 })).toThrowError(
          'two (and only two) parameters of the triangle must be specified'
        );
      });

      it('throws an error if three parameters are specified', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        expect(() =>
          service.triangle({ angle: Math.PI / 4, adjacent: 3, opposite: 3 })
        ).toThrowError(
          'two (and only two) parameters of the triangle must be specified'
        );
      });

      it('calculates from hypotenuse and opposite', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        const r = service.triangle({
          hypotenuse: t.hypotenuse,
          opposite: t.opposite
        });
        expect(r.angle).toBeCloseTo(t.angle, 7);
        expect(r.oppositeAngle).toBeCloseTo(t.oppositeAngle, 7);
        expect(r.adjacent).toBeCloseTo(t.adjacent, 7);
        expect(r.opposite).toBeCloseTo(t.opposite, 7);
        expect(r.hypotenuse).toBeCloseTo(t.hypotenuse, 7);
        expect(r.area).toBeCloseTo(t.area, 7);
      });

      it('calculates from hypotenuse and adjacent', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        const r = service.triangle({
          hypotenuse: t.hypotenuse,
          adjacent: t.adjacent
        });
        expect(r.angle).toBeCloseTo(t.angle, 7);
        expect(r.oppositeAngle).toBeCloseTo(t.oppositeAngle, 7);
        expect(r.adjacent).toBeCloseTo(t.adjacent, 7);
        expect(r.opposite).toBeCloseTo(t.opposite, 7);
        expect(r.hypotenuse).toBeCloseTo(t.hypotenuse, 7);
        expect(r.area).toBeCloseTo(t.area, 7);
      });

      it('calculates from opposite and adjacent', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        const r = service.triangle({
          opposite: t.opposite,
          adjacent: t.adjacent
        });
        expect(r.angle).toBeCloseTo(t.angle, 7);
        expect(r.oppositeAngle).toBeCloseTo(t.oppositeAngle, 7);
        expect(r.adjacent).toBeCloseTo(t.adjacent, 7);
        expect(r.opposite).toBeCloseTo(t.opposite, 7);
        expect(r.hypotenuse).toBeCloseTo(t.hypotenuse, 7);
        expect(r.area).toBeCloseTo(t.area, 7);
      });

      it('calculates from angle and adjacent', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        const r = service.triangle({
          angle: t.angle,
          adjacent: t.adjacent
        });
        expect(r.angle).toBeCloseTo(t.angle, 7);
        expect(r.oppositeAngle).toBeCloseTo(t.oppositeAngle, 7);
        expect(r.adjacent).toBeCloseTo(t.adjacent, 7);
        expect(r.opposite).toBeCloseTo(t.opposite, 7);
        expect(r.hypotenuse).toBeCloseTo(t.hypotenuse, 7);
        expect(r.area).toBeCloseTo(t.area, 7);
      });

      it('calculates from angle and opposite', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        const r = service.triangle({
          opposite: t.opposite,
          angle: t.angle
        });
        expect(r.angle).toBeCloseTo(t.angle, 7);
        expect(r.oppositeAngle).toBeCloseTo(t.oppositeAngle, 7);
        expect(r.adjacent).toBeCloseTo(t.adjacent, 7);
        expect(r.opposite).toBeCloseTo(t.opposite, 7);
        expect(r.hypotenuse).toBeCloseTo(t.hypotenuse, 7);
        expect(r.area).toBeCloseTo(t.area, 7);
      });

      it('calculates from angle and hypotenuse', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        const r = service.triangle({
          angle: t.angle,
          hypotenuse: t.hypotenuse
        });
        expect(r.angle).toBeCloseTo(t.angle, 7);
        expect(r.oppositeAngle).toBeCloseTo(t.oppositeAngle, 7);
        expect(r.adjacent).toBeCloseTo(t.adjacent, 7);
        expect(r.opposite).toBeCloseTo(t.opposite, 7);
        expect(r.hypotenuse).toBeCloseTo(t.hypotenuse, 7);
        expect(r.area).toBeCloseTo(t.area, 7);
      });
    });
  });
});
