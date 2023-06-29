import * as readline from 'readline';
import { Ball } from './Balon';
import { BallState, StationaryState, RollingState } from './State';
const ball = new Ball();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
ball.move();
// Función para manejar el comando ingresado
function handleCommand(command: string): void {
  if (command === 'para') {
    console.log('Programa detenido.');
    rl.close(); // Cierra la interfaz readline y detiene la lectura de comandos
    return; // Detiene la ejecución del resto de la función 
  }

  switch (command) {
    case 'quieto':
      ball.setState(new StationaryState());
      break;
    case 'rodando':
      ball.setState(new RollingState());
      break;
    default:
      console.log('Comando no reconocido.');
  }

  ball.move();
}
// Leer comandos desde la línea de comandos
function readCommands(): void {
  rl.question('Ingrese un comando ("quieto" o "rodando"): ', (command) => {
    handleCommand(command);
    readCommands(); // Volver a leer el siguiente comando
  });
}
// Iniciar la lectura de comandos
readCommands();
