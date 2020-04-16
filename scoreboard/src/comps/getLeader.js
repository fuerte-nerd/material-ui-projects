export default (players) => {
  if (typeof players === "object") {
    let leaders = [players[0]];

    for (let i = 1; i < players.length; i++) {
      if (players[i].score > leaders[0].score) {
        leaders = [players[i]];
      } else if (players[i].score === leaders[0].score) {
        leaders = leaders.concat([players[i]]);
      } else {
        continue;
      }
    }

    switch (leaders.length) {
      case 1:
        return in_progress
          ? `${leaders[0].name} is winning`
          : `${leaders[0].name} won`;
      case players.length:
        return in_progress ? `Nobody is winning` : `Nobody won`;
      case 2:
        return in_progress
          ? `${leaders[0].name} and ${leaders[1].name} are winning`
          : `${leaders[0].name} and ${leaders[1].name} won`;
      case 3:
        return in_progress
          ? `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} are winning`
          : `${leaders[0].name}, ${leaders[1].name} and ${leaders[2].name} won`;
      default:
        return in_progress
          ? `The lead is tied ${leaders.length} ways`
          : `The game was tied ${leaders.length} ways`;
    }
  }
};
