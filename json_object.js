const obj = {
    name : 'sana',
    age : 23,
    gender : 'female',
    hobby : ['노래', '달리기']
    /* 자바스크립트 오브젝트 */
};

/* JASON은 키 이름 및 문자열 "" 기호로 사용, JASON과 자바스크립트 오브젝스 모양을 같지만
    JASON은 하나의 문자열이기 때문에 둘 사이에 변환이 필요하다. */

// const json = JSON.stringify(obj);   /* 자바오브젝트 -> JSON 형식 문자열로 변환 */
const json = JSON.stringify(obj, null, 3); /* 두번째 인자는 함수, 3은 들여쓰기 칸 */
console.log(typeof obj);
console.log(obj);
console.log("---------obj -> json----------");
console.log(typeof json);
console.log(json);

// JSON 문자열을 JS Object로 변환하기
const json2 = '{"name": "sana","age": 23,"gender": "female","hobby": ["노래","달리기"]}';
const obj2 = JSON.parse(json2);
console.log("--------json -> obj-----------");
console.log(typeof obj2);
console.log(obj2);
console.log("--------json -> obj-----------");
const test = JSON.parse(json);
console.log(typeof obj2);
console.log(obj2);
