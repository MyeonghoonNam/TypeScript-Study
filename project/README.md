## 코로나 세계 현황판 만들기
자바스크립트 프로젝트에 타입스크립트를 점진적으로 적용하기

1. 자바스크립트 파일에 JSDoc으로 타입 시스템 적용
2. 타입스크립트 기본 환경 구성
    - NPM 초기화
    - 타입스크립트 라이브러리 설치
    - 타입스크립트 설정 파일 생성 및 기본 값 추가
    - 자바스크립트 파일을 타입스크립트 파일로 변환하기
3. 명시적인 `any` 선언하기
    - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
    - 타입 구체화를 통한 타입 정의
    - 만약, 타입을 정하기 어려운 복잡한 비지니스 로직의 경우 명시적으로라도 `any`를 선언하기.
4. 프로젝트 환경 구성
    - babel, eslint, prettier 등
5. 외부 라이브러리 모듈화
    - 라이브러리를 쓰는 경우 DefinitelyTyped에서 `@types` 관련 라이브러리를 찾아 설치하기.
6. `strict` 옵션 추가 후 타입 정의
    ```
    {
      "compilerOptions": {
        // ...
        "strict": true,
      },
    }
    ```
    
## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)