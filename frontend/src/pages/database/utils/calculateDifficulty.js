/**
 * Calculates the difficulty score of a level based on various parameters
 * The score is determined by:
 *  * - Number of attempts vs successful completions ratio
 * - Average time spent on the level
 * - Number of hints used
 * - Total plays (more plays = more accurate difficulty rating)
 */
export const calculateDifficulty = (finish, usersCount) => {
  const MIN_ATTEMPTS = 5;
  const SCALE_MAX = 10;

  if (usersCount < MIN_ATTEMPTS) {
    return 1;
  }

  const successRate = finish / usersCount;
  let difficulty = (1 - successRate) * (SCALE_MAX - 1) + 1;
  const weight = Math.min(1, usersCount / (MIN_ATTEMPTS * 2));
  difficulty = difficulty * weight + 1 * (1 - weight);

  return difficulty.toFixed(1);
};
