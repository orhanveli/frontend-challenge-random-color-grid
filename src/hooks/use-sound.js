export const useSound = (soundfile) => {
  const audio = new Audio(soundfile);

  return {
    audio,
  };
};
