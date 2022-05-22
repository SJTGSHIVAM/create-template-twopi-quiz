export const getCurrentDateTime = () => new Date().toISOString();

export const shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
export const userResponse = (user) => {
  const { password, updatedAt, ...userResp } = user;
  return userResp;
};
