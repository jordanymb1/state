export interface BallState {
  move(): void;
}

export class StationaryState implements BallState {
  move(): void {
    console.log('El balón está quieto.');
  }
}

export class RollingState implements BallState {
  move(): void {
    console.log('El balón está rodando.');
  }
}
