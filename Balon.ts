
import { BallState, StationaryState, RollingState } from './State';

export class Ball {
  private state: BallState;

  constructor() {
    this.state = new StationaryState();
  }

  setState(state: BallState): void {
    this.state = state;
  }

  move(): void {
    this.state.move();
  }
}
