let A = false;
let B = true;
let C = false;

formula1 = (A || (B && C));
formula2 = (B || (A || C));
formula3 = (B && (A || C));

// display
console.log('คำตอบของ (A || (B && C)) คือ: '+formula1);
console.log('คำตอบของ (B || (A || C)) คือ: '+formula2);
console.log('คำตอบของ (B && (A || C)) คือ: '+formula3);