import numbers from './numbers';
import {quantile, ascending} from 'd3-array';

export default function(array, samples, alpha, f) {
  var values = numbers(array, f),
      n = values.length,
      m = samples,
      a, i, j, mu;

  for (j=0, mu=Array(m); j<m; ++j) {
    for (a=0, i=0; i<n; ++i) {
      a += values[~~(Math.random() * n)];
    }
    mu[i] = a / n;
  }

  return [
    quantile(mu.sort(ascending), alpha/2),
    quantile(mu, 1-(alpha/2))
  ];
}
