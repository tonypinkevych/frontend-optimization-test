// @NOTE: just heave computation, you can ignore it
export async function heavyCalculation(n: number): Promise<number> {
  const start = new Date().getTime();

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += i * i;
  }
  const end = new Date().getTime();
  console.log("CALCULATION TAKES MS", end - start);
  return Promise.resolve(result);
}
