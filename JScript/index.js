// 67 ~ 119

for (let i = 67; ;) {
    if (i >= 120) break;
    console.log(i);
    i++;
}

// 5 ~ -34

for (let i = 6; ;) {
    if (i <= -34) break;
    i--;
    console.log(i);
}

// 91 ~ 153

for (let i = 90; ;) {
    i++;
    console.log(i);
    if (i >= 153) break;
}

// ====================================================================================

// while (조건식(반복)) {
//     반복실행블럭;
// }

// 17 ~ 93

let i = 16;

while (i < 93) {
    i++;
    console.log(i);
}

// 114 ~ 191

let i = 114; 

while (i < 192) {
    console.log(i);
    i++;
}

// 93 ~ 154 

let i = 92;

while (1) {             //  JavaScript에서의 무한루프는 ture 대신 1을 써도 무한루프로 평가됨.
    i++;
    if (i >= 155) break;
    console.log(i);
}

// 41 ~ 33

let i = 42;

while (1) {
    i--;
    console.log(i);
    if (i <= -33) break;
}