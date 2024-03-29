function solution(answers) {
    const answer = [];
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (a[i % a.length] === answers[i])score[0]++;
        if (b[i % b.length] === answers[i])score[1]++;
        if (c[i % c.length] === answers[i])score[2]++;
    }
    
    const max = Math.max(...score);
    for (let j = 0; j < score.length; j++) {
        if (score[j] === max) {
            answer.push(j + 1);
        }
    }
    
    return answer;
}