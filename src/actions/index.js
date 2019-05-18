export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

// ... MOVE_OBJECTS
export const START_GAME = 'START_GAME';

// ... moveObjects

export const startGame = () => ({
  type: START_GAME,
});