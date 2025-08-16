console.log("Siz Train.ts Sahifasidasiz");


/*    PM2 COMMANDS

pm2 start dist/server.js --name=FUNRNIXAR
pm2 start "npm run start:prod" --name=FURNIXAR
pm2 ls
pm2 logs "port id"
pm2 stop ID
pm2 delete ID
pm2 start ID
pm2 restart ID (Loyihani qayta ishga tushurish stop qilmasdan)
pm2 monit (Loyiha monitoring qilish)
pm2 kill ( Hamma serverlarni uzadi)

 */





/*
    TASK-ZH:

    Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin.
    MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]
*/


/**     SOLUTION   **/

function findDisappearedNumbers(arr: number[]): number[] {
  const maxNum = Math.max(...arr);
  const result: number[] = [];

  for (let i = 1; i < maxNum; i++) {
      if (!arr.includes(i)) {
          result.push(i);
      }
  }
  return result;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));





/*******************************************************/



/*

TASK-ZG:

Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

*/

/**     SOLUTION    **/

// function toSnakeCase(str: string): string {
//   return str.split(' ').map(word => word.toLowerCase()).join('_');
// }

// console.log(toSnakeCase('name should be a string'));




/*********************************************************/




/*
  TASK-ZF:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
*/


/****        SOLUTION          ****/

// function capitalizeWords(input: string): string {
//   return input.split(' ').map(word => word.length > 2 ? word[0].toUpperCase() + word.substring(1) : word).join(' ');
// }

// console.log(capitalizeWords('name should be a string'));




/*********************************************************/





/*
    TASK ZE

    Shunday function yozing, uniygona string parametri mavjud bo'lsin.
    Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
    qiymatni qaytarsin.

    MASALAN: removeDuplicate('stringg') return 'string'

    Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
    funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
    qaytarmoqda.
*/


/**        SOLUTION          **/

// function removeDuplicate(str: string): string {
//   let result = " ";

//   for (let char of str) {
//       if (!result.includes(char)) {
//           result += char;
//       }
//   }

//   return result;
// }

// console.log(removeDuplicate("stringg"));



/************************************************************/





/*
    TASK ZD

    Shunday function yozing. Bu function o'ziga, parametr sifatida
    birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
    qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
    shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
    yangilangan arrayni qaytarsin.

    MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

    Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
    Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
    yangilangan arrayni qaytarmoqda.
*/


/**     SOLUTION    **/


//     function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//     const newArr = [...arr];
//     newArr[index] = newValue;
//     return newArr;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));







/***************************************************************/






/*
  TASK ZC

  Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
  Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

  MASALAN: celsiusToFahrenheit(0) return 32;
  MASALAN: celsiusToFahrenheit(10) return 50;

  Yuqoridagi misolda, 0°C, 32°F'ga teng.
  Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

  °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
*/


/***      SOLUTION       ***/

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(10));




/*******************************************************************/




/**
  TASK-ZB:

  Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
  MASALAN: randomBetween(30, 50) return 45
**/


/**      SOLUTION        **/


// function randomBetween(a: number, b: number): number {
//   return Math.floor(Math.random() * (b - a)) + a;
// }

// console.log(randomBetween(34, 50));






/****************************************************************************/





/**
    TASK-Z:

  Shunday function yozing. Bu function sonlardan iborat array
  qabul qilsin. Function'ning vazifasi array tarkibidagi juft
  sonlarni topib ularni yig'disini qaytarsin.

  MASALAN:
  sumEvens([1, 2, 3]); return 2;
  sumEvens([1, 2, 3, 2]); return 4;

  Yuqoridagi misolda, bizning funktsiya
  berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
  sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.
**/


/**   Solution   **/

// function sumEvens(numbers: number[]): number {
//   return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([1, 2, 3, 2]));











/****************************************************************************/






/*
TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.

*/




/***       Solution       ***/

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter(value => arr2.includes(value));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));






/****************************************************************************/







/*
  TASK-X

  Shunday function yozing, uni object va string parametrlari bo'lsin.
  Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
  necha marotaba takrorlanganlini sanab qaytarsin.

  Eslatma => Nested object'lar ham sanalsin

  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

  Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
  Funktsiya, shu ikkinchi argument 'model', birinchi argument object
  tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

*/



/*       Solution        */


// function countOccurrences(obj: Record<string, any>, key: string): number {
//   let count = 0;

//   const countKeys = (obj: Record<string, any>): void => {
//     for (const k in obj) {
//       if (k === key) {
//         count++;
//       }
//       if (typeof obj[k] === "object" && obj[k] !== null) {
//         countKeys(obj[k]);
//       }
//     }
//   };

//   countKeys(obj);
//   return count;
// }

// const testObj = {
//   model: 'Bugatti',
//   steer: {
//     model: 'HANKOOK',
//     size: 30,
//   },
// };
// console.log(countOccurrences(testObj, 'model'));






/******************************************************************/






/*
  TASK-W:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]
*/


/*********       Solution      ********/

// function chunkArray(arr: number[], size: number): number[][] {
//   const result: number[][] = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result);





/************************************************************/





/*
  TASK-V:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


*/


/**   Solution     **/


// function harflarniHisobla(matn: string): { [harf: string]: number } {
//   const natija: { [harf: string]: number } = {};
//   for (let i = 0; i < matn.length; i++) {
//       const harf = matn[i];
//       if (natija[harf]) {
//           natija[harf]++;
//       } else {
//           natija[harf] = 1;
//       }
//   }
//   return natija;
// }
// const natija = harflarniHisobla("hello");
// console.log(natija);


/*********************************************************************/




/*
  TASK-U:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

*/

/*    SOLUTION   */


// function countOddNumbers(n: number): number {
//   return Math.floor(n / 2);
// }
// console.log(countOddNumbers(9));
// console.log(countOddNumbers(11));



/*******************************************************************/





/*
   TASK-T:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]!

*/


/*              SOLUTION             */

// function mergeSortedArrays(array1: number[], array2: number[]): number[] {
//   return [...array1, ...array2].sort((a, b) => a - b);
// }


// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));






/*****************************************************************/



/*
   TASK-S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
*/


/*                            SOLUTION                         */

// function missingNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== i) {
//           return i;
//       }
//   }
//   return nums.length;
// }

// console.log(missingNumber([3, 0, 1]));












// ****************************************************************/









// function calculate(expression: string) {

//     const result = eval(expression);
//     if (typeof result === "number") {
//       return result;
//     } else {
//       return 0;
//     }
// }

// console.log(calculate("1 + 3")); 
// console.log(calculate("10 - 7")); 
// console.log(calculate("5 * 2")); 
// console.log(calculate("8 / 2"));






/*******************************************************/ 









/* TASK-Q:

  Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
  MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

*/

// function hasProperty(obj: object, prop: string):boolean {
//   return prop in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));








/****************************************************************************/







/*TASK-P:

    Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
    MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */

// function createArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(createArray({ a: 10, b: 20 }));








/************************************************************/







/*
   TASK-O:

  Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
  MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

*/


/* ______________ SOLUTION ___________________*/

// function calculateSumOfNumbers(array: any[]) {
//   let Total = 0;

//   for (const item of array) {
//       if (typeof item === 'number') {
//           Total+= item;
//       }
//   }

//   return Total;
// }
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));





/*************************************************************************/






/*
     Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
     MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/


// function stringCheck(input: string): boolean {
//   const splited= input.split("")
//   const reversed = splited.reverse();
//   const join  = reversed.join('')
//   return input === join;
// }

// console.log(stringCheck("dad"));
// console.log(stringCheck("son"));








/*************************************************************************/





/**TASK M:

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]; */



// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//   return numbers.map(num => ({
//       number: num,
//       square: num * num
//   }));
// }


// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);






//////////////////////////////////////////////////*/







/*
  TASK L: 

  Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
  MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

*/

// SOLUTION:

// function reverseSentence(input: string): string {

//   const split = input.split(' ');
//   const  map = split.map(word => word.split('').reverse().join(''));
//   const totalAnswer = map.join(' ') ;
//   return totalAnswer;
      
// }

// console.log(reverseSentence("we like coding!")); 



/**************************************************************************/






/*
    TASK K: 

    Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
    MASALAN: countVowels("string") return 1
*/


// SOLUTION:


// function countVowels(input: String) {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (vowels.includes(input[i])) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countVowels("is there any vowel"));






/**************************************************************************/










/*
        TASK J:

    Shunday function tuzing, u string qabul qilsin.
    Va string ichidagi eng uzun so'zni qaytarsin.

    MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

    Yuqoridagi text tarkibida 'Uzbekistan'
    eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
*/



/*                       SOLUTION                                */


// function findLongestWord(input: string): any {

//   const stringtoArray = input.split(" ");
//   let longestWord = "";
//   for (const oneWord of stringtoArray) {
//     if (oneWord.length > longestWord.length) {
//       longestWord = oneWord;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("Welcome to Uzbekiston"))











/**************************************************************************/













/*
   TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

*/


/*************               SOLUTION                   ***************/


// function majorityElement(arr: number[]): number | null {
//   const countMap = new Map<number, number>(); // Mapda raqam va sonni saqlaymiz

//   for (let num of arr) { // Har bir elementni tekshiramiz
//     if (countMap.has(num)) {
//       countMap.set(num, countMap.get(num)! + 1); // Qiymatni oshirish
//     } else {
//       countMap.set(num, 1); // Mapga yangi qiymat qo'shish
//     }
//   }

//   let maxCount = 0; // Eng ko'p takrorlangan raqamning sanog'i
//   let result: number | null = null; // Natija

//   for (let [key, value] of countMap) { // Map ichidagi har bir (raqam, sanoq) juftligini tekshiramiz
//     if (value > maxCount) { // Agar ko'proq takrorlangan bo'lsa
//       maxCount = value; // Takrorlanish sonini yangilash
//       result = key; // Eng ko'p uchragan raqamni saqlash
//     }
//   }

//   return result; 
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4












/**************************************************************************/




/*

H2-TASK:

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

*/

/*               SOLUTION                 */

// function getNumber(string){
//   let newNumber = ''
//   for(i = 0; i < string.length; i++){
//      if(!isNaN(string[i])){
//        newNumber += string[i];
//      }
//   }
//      return newNumber;
// };

// console.log(getNumber("bug23bek1"))







/**************************************************************************/







// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive 
//qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


// YECHIM: 

  // function getPositiveNumber(arr){

  //   let result = "";

  //   for(let i = 0; i < arr.length; i++ ){
  //        if(arr[i] > 0){
  //          result += arr[i];
  //        }
  //     }

  //     return result;
  // }

  // console.log(getPositiveNumber([4, -5, 2, -1]));





// ********************************************************************************


// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.



//YECHIM :

// function getHigherInder(arr){
       
//      let getMaxValue = Math.max(...arr);
//       // console.log("highest value:", getMaxValue)

//     return  arr.indexOf(getMaxValue);
// }

// console.log(getHigherInder([5, 21, 12, 4, 8]));

