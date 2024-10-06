/*1. 
let age = 23;//선언, 초기화, 변수
//상수
const birth = "2002.04.07";//const(상수)는 선언시 초기화값 할당
//변수 명명규칙
//$, _ 제외 기호 사용x(달러 언더바)
//이름은 숫자로 시작x
//예약어(const, if)로 명명x

2.
let num1 = 2;//number type자료
let inf = Infinity;

let name = "이재환";//string type, 덧셈 가능
let introduce = `${name}은 ${inf}`;//물결표로 값 입력 가능

let isSwitch = true;//boolean type
let isEmpty = false;

let empty = null;//null, 직접 없다는 걸 넣을 때

let none;//undefined type, 할당안할때 자동으로 들어가는 것*/

//형변환 string->number 묵시적(알아서 바꿔줌), 명시적(내가 시킴)
let num=10;
let str="20";
const result=num+str;//1020, num이 string으로 바뀜, 묵시적

let str1 = "10";
let strtonum= Number(str1);//숫자만 있을 떄
let str2="10개";
let strtonum1=parseInt(str2);//숫자가 앞에서 섞일 때, 걸러줌
let numtostr=String(str1);//str으로 바꿈

//비교연산자 ===, 아니다는 !== (==는 자료형까지는 비교x)
let var1;
let var2=10;
let var3=20;
let var4 = var1 ?? var2;//undefined를 찾아내서 var2값 할당
//둘 다 할당된 값이면 var1(앞에 것) 할당
let t1 =typeof var2;//자료형타입을 반환, 이거는 number
let res = var3 %2===0? "짝수" : "홀수";//?앞이 조건이고 
//뒤에는 참일시 전자, 아님 후자를 반환해서 res에 저장
//if문은 그대로, else if도 가능
//switch문, 다수 조건시
let animal = "cat";
switch(animal){
    case "cat":{
        // console.log("고양이");
        break;//넣어야 이것만 실행됨
    }
    case "dog":{
        // console.log("강아지");
        break;
    }
    case "bear":{
        // console.log("곰");
        break;
    }
    default:{
        // console.log("못 찾은 기본");
    }
}
//반복문 for(let idx = 0; idx<5; idx++){continue;만나면 바로 다음 바퀴}
//함수 선언
function greeting(){
    // console.log("hi");
    //function 중첩가능
}
greeting();//함수호출, ()소괄호 필요
function getArea(width, height){
    let area = width * height;
    // console.log(area);
    return area;//반환값
}
getArea(10,20);//200반환
function funcA(){
    // console.log("A");
}
let varA = funcA;
varA();//funA호출됨
let var8 = function(){};
var8();//함수 이름 없어도 가능
//화살표함수 () =>{};형식 ()에는 매개변수, {}에는 내용
let varC = (value) =>{console.log(value);
    return value +1;};//매개변수 +1을 반환하고 함수실행하는 화살표함수
//콜백함수, 매개변수에 함수를 넣음
function main(value){
    //console.log(value);sub함수 모든 내용 출력
    value();//함수 호출, sub함수 실행해서 sub출력
}
function sub(){
    // console.log("sub");
}
main(sub);//main함수에서
main(()=>{
    //함수내용
})//main함수에 화살표함수를 넣어서 함수내용을 main함수로 보냄
//객체생성
let obj1 = new Object();
let obj2 = {};//객체 리터럴, 대체로 이거
let person = {//객체 속성
    name: "이재환",//key(문자나 숫자만): value(자료형 상관x)
    age: 23,
    hobby: "테니스",
};
let name = person.name;//속성접근
let age = person["age"];//속성접근
person.job="student";//속성 추가, job:student
person.job="hi";//속성수정
delete person.job;//삭제
delete person["hobby"];
let result1 = "name" in person;//person에 name있으면 true반환
//상수객체
const animal1={
    type:"고양이",
    name:"나비",
};
animal.age=2;//const여도 안에 속성은 추가, 삭제 ,수정 가능
const person1={
    name: "이재환",
    sayhi: function(){
        return "hi";
    },
    sayhi1(){
        return 1;
    },
    sayhi2:()=>{
        return 2;
    }
}
person.sayhi();
//배열생성
let arrA = new Array();
let arrB = [];
let arrC = [1,2,3,true,null,"hi",()=>{}];
let item1 = arrC[0];//1출력
arrC[0]=4;//배열 수정