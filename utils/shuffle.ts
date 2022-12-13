function shuffle(array: string[]) {
  let m = array.length;
  let t = null;
  let i = null;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

const listAnimals = [
  '/assets/01.png',
  '/assets/02.png',
  '/assets/03.png',
  '/assets/04.png',
  '/assets/05.png',
  '/assets/06.png',
  '/assets/07.png',
  '/assets/08.png',
  '/assets/09.png',
];

export const shufflingCards = () => {
  const shuffleAnimalList = shuffle([...listAnimals, ...listAnimals]);
  return shuffleAnimalList.map((animal, _index) => {
    return {
      flipped: false,
      animal,
      index: _index,
    };
  });
};
