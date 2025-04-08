const board = Chessboard('board', {
    position: 'start',
    draggable: true,
    dropOffBoard: 'snapback',
    onDrop: handleMove
});

const game = new Chess();
updateStatus();

function handleMove(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';

    updateStatus();
}

function updateStatus() {
    if (game.in_checkmate()) {
        $('#status').text('Schachmatt!');
    } else if (game.in_draw()) {
        $('#status').text('Unentschieden!');
    } else {
        $('#status').text(game.turn() === 'w' ? "Weiß ist am Zug" : "Schwarz ist am Zug");
    }
}