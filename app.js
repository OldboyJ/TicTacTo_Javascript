const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = 'O'

$(document).ready(function() {
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  isGameOver = () => {
    // check if game is over

    // check horizontal game
    for (var i = 0; i < 3; i++) {
      if (grid[i][0] !== ' ' &&
        grid[i][0] === grid[i][1] &&
        grid[i][0] === grid[i][2]) {
            return grid[i][0]
      }
    }

    // check vertical game
    for (var j = 0; j < 3; j++) {
      if (grid[0][j] !== ' ' &&
      grid[0][j] === grid[0][j] &&
      grid[0][j] === grid[0][j]) {
        return grid[0][j]
      }
    }

    // check diagonal game - top left bottom right
      if (grid[0][0] !== ' ' &&
        grid[0][0] === grid[1][1] &&
        grid[0][0] === grid[2][2]) {
            return grid[0][0]
          }

    // check digonal game - bottom left top right
      if (grid[2][0] !== ' ' &&
        grid[2][0] === grid[1][1] &&
        grid[2][0] === grid[0][2]) {
            return grid[2][0]
          }

          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              if(grid[i][j] === ' '){
                return false
              }
            }
          }
          return null;
  }

  moveAI = () => {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if(grid[i][j] === ' '){
          return {
            i: i,
            j: j
          };
        }
      }
    }
    return null;
  }

  $('.col').click(function() {
    $this = $(this);
    $this.html(PLAYER_TOKEN);
    const i = $this.data('i');
    const j = $this.data('j');
    grid[i][j] = PLAYER_TOKEN;

    let gameState = isGameOver()
    if (gameState) {
        alert('game over: ' + gameState);
        return;
    } else {
      const move = moveAI()
      grid[move.i][move.j] = COMPUTER_TOKEN;
      $('.col[data-i=' + move.i + '][data-j=' + move.j + ']').html(COMPUTER_TOKEN)
    }

    gameState = isGameOver()
    if (gameState) {
      alert('game over: ' + gameState)
    }
  });

  $('#restart').click(function() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        grid[i][j] = ' ';
        $('.col[data-i=' + i + '][data-j=' + j + ']').html(' ')
      }
    }

  })
});
