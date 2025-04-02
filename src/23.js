function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, next = 0;
  
  while (next < n) {
    next = a + b;
    a = b;
    b = next;
  }
  
  return b;
}
