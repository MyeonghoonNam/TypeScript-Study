// 제네릭은 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징이다.
// 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 많이 사용되어진다.

// const logText = <T>(text:T):T => {
//   console.log(text);

//   return text;
// }

// 호출하는 시점에 타입을 지정한다.
// logText<string>('Hi~');
// logText<number>(10);

// -------------------------------------------------------------------------

// 기존 타입 방식의 문법은 동일한 기능의 함수지만 타입에 따라 여러 중복 선언이 발생하는 단점이 있다.
// const logNumber = (text:number) => {
//   console.log(text);

//   return text;
// }

// const logBoolean = (text: boolean) => {
//   console.log(text);

//   return text;
// }

// 위의 중복 선언 단점을 극복하기 위해 파라미터에 유니온 타입을 이용하여 선언 중복을 막을 수 있지만
// 유니온 타입들의 공통적으로 사용가능한 메서드만 사용가능하기에 input에 관한 문제는 해결가능 하지만 output에 관한 예상치 못한 에러를 직면할 수 있다.
const logText = (text: string | number) => {
  console.log(text);
  return text;
} 

const log = logText('Hi');
// 언급한 바와 같이 문자열을 반환했지만 문자열 메서드를 사용하지 못하는 상황이 발생한다.
// log.split('')


