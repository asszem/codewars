function isTriangle(a,b,c)
{
  if (
      (typeof a!='number' || typeof b!='number' || typeof c!='number')
      ||
      (a<1 || b<1 || c<1) 
      ||
      (a+b<=c || a+c<=b || c+b<=a)
    ) {
    return false;
  }
  return true;
}