function solution(num_list) {
  let answer = 0;
  
  for(el of num_list) {
    let num = el;

    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
        
      } else {
        num -= 1;
        num /= 2;
      }

      answer++;
    }
  }

  return answer;
}