import Player from "./Player";
import Data from './Data';
import DomUpdates from './DomUpdates'
import Round from './Round';
import Wheel from './Wheel'

class Game {
  constructor() {
    this.players = []
    // this.clueBank = null
    this.wheels = []
    this.roundInst = new Round()
  }




  startGame(p1, p2, p3) {
    this.createPlayers(p1, p2, p3)
    this.createGameBoard()
    this.roundInst.createClues()
    
  }


  createPlayers(p1, p2, p3) {
    let player1 = new Player(p1)
    let player2 = new Player(p2)
    let player3 = new Player(p3)
    this.players.push(player1)
    this.players.push(player2)
    this.players.push(player3)
  }
  

  createGameBoard() {
    DomUpdates.createBoard(this.players)
  }


}

export default Game