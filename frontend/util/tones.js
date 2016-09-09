
export const TONES = {
  "A": 523.25,
  "S": 587.33,
  "D": 659.25,
  "F": 698.46,
  "G": 783.99,
};

export const NOTE_NAMES = Object.keys(TONES);
export const NOTE_FREQ = NOTE_NAMES.map(key => TONES[key]);
