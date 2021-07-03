const scores = [37, 89, 42, 65, 91, 51];

scores.sort(function(a,b){
    return a-b;
});

console.log(scores);

scores.sort(function(a,b){
    return b-a;
});

console.log(scores);
