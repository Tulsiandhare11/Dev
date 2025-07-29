/*function diamond(n) {
  // Upper part
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let s = 1; s <= n - i; s++) {
      line += ' ';
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      line = line + '*';
    }

    console.log(line);
  }

  // Lower part
  for (let i = n - 1; i >= 1; i--) {
    let line = '';

    for (let s = 1; s <= n - i; s++) {
      line = line + ' ';
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      line = line +'*';
    }

    console.log(line);
  }
}

diamond(5);*/



/*function numberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';

    // spaces
    for (let s = 1; s <= n - i; s++) {
      line += ' ';
    }

    // left side numbers
    for (let j = 1; j <= i; j++) {
      line = line + j;
    }

    // right side numbers
    for (let j = i - 1; j >= 1; j--) {
      line = line + j;
    }

    console.log(line);
  }
}

numberPattern(5); */

/*function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line = line+j;
    }
    console.log(line);
  }
}

rightTriangle(5); */




/*
let n=5

for(let i=1; i<=n; i++){
let row="";

for (let j=n;j>=i; j--){

  row = row+j;
}
 console.log(row)
} */

let n=5
for (let i=n; i>=1;i--){
  let row="";

for (let s=1;s<=n-i;s++)
{
  row=row+" "

}
for (let j=1;j<=2*i-1;j++){
  row=row+"*";
}
console.log(row);

}


cas














