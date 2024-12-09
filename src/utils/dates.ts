export const addMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

export const isExpired = (expiresAt: Date): boolean => {
  return new Date() > expiresAt;
};

export const getRemainingDays = (expiresAt: Date): number => {
  const now = new Date();
  const diff = expiresAt.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};