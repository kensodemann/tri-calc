import { Injectable } from '@angular/core';

import { Triangle } from '../../models/triangle';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  triangle(t: Triangle): Triangle {
    this.checkInput(t);
    const res = { ...t };
    res.angle = this.angle(res);
    res.oppositeAngle = this.oppositeAngle(res);
    res.hypotenuse = this.hypotenuse(res);
    res.adjacent = this.adjacent(res);
    res.opposite = this.opposite(res);
    res.area = this.area(res);
    return res;
  }

  private angle(t): number {
    if (t.angle) {
      return t.angle;
    }
    if (t.opposite && t.hypotenuse) {
      return Math.asin(t.opposite / t.hypotenuse);
    }
    if (t.adjacent && t.hypotenuse) {
      return Math.acos(t.adjacent / t.hypotenuse);
    }
    if (t.opposite && t.adjacent) {
      return Math.atan(t.opposite / t.adjacent);
    }
    throw new Error('There was not enough information to calculate the angle');
  }

  private oppositeAngle(t: Triangle): number {
    return Math.PI / 2 - t.angle;
  }

  private hypotenuse(t: Triangle): number {
    if (t.hypotenuse) {
      return t.hypotenuse;
    }
    if (t.adjacent && t.opposite) {
      return Math.hypot(t.adjacent, t.opposite);
    }
    if (t.angle && t.adjacent) {
      return t.adjacent / Math.cos(t.angle);
    }
    if (t.angle && t.opposite) {
      return t.opposite / Math.sin(t.angle);
    }
    throw new Error('There was not enough information to calculate the hypotenuse');
  }

  private adjacent(t: Triangle): number {
    return t.adjacent || Math.cos(t.angle) * t.hypotenuse;
  }

  private opposite(t: Triangle): number {
    return t.opposite || Math.sin(t.angle) * t.hypotenuse;
  }

  private area(t: Triangle): number {
    return 0.5 * t.opposite * t.adjacent;
  }

  private checkInput(t: Triangle): void {
    if (this.paramterCount(t) !== 2) {
      throw new Error(
        'two (and only two) parameters of the triangle must be specified'
      );
    }
  }

  private paramterCount(t: Triangle) {
    let args = 0;
    args += t.angle ? 1 : 0;
    args += t.adjacent ? 1 : 0;
    args += t.opposite ? 1 : 0;
    args += t.hypotenuse ? 1 : 0;
    return args;
  }
}
