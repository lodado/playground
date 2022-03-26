# web-frontend

안녕하세요! 프론트 직무 지원자 이충헌입니다.

코딩 테스트 제출합니다. 

감사합니다.

작성 완료 일자 : 2022-02-13

연락 이메일 : ycp998@naver.com

## 파일 구조

```
├─public
└─src
    ├─javascripts
    │  ├─components
    │  │  ├─common
    │  │  └─page
    │  │      └─list
    │  │          └─CarDescriptionModal
    │  ├─global
    │  │  ├─api
    │  │  ├─constrant
    │  │  ├─interface
    │  │  └─util
    │  ├─hooks
    │  └─redux
    └─stylesheets
```
src/stylesheets에 `css` 파일들을 담았습니다.

src/javascripts/global 안에 공통적으로 사용되는 `상수`, `interface`, `함수`등을 담았습니다.

(src/javascripts/hook은 사용하지 않았습니다)

src/javascripts/redux 에 사용한 redux와 redux-saga 관련 `action`, `reducer`, `saga` 등을 담았습니다. 

src/javascripts/components에 사용한 `react component`들을 담았습니다.


## 시작 방법

```
yarn install 
yarn start
yarn server

http://localhost:3000/ 접속
```

* yarn이 설치되있어야 합니다


## 사용 기술스택

#### 언어

<img width=100px height=25px src="https://img.shields.io/badge/-TypeScript-1f2229?style=flat&logo=TypeScript">&nbsp;

#### 라이브러리

<img width=80px height=25px src="https://img.shields.io/badge/-React-1f2229?style=flat&logo=React">&nbsp;
<img width=80px height=25px src="https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=Redux">&nbsp;
<img width=100px height=25px src="https://img.shields.io/badge/-Redux_Saga-white?style=flat&logo=ReduxSaga&logoColor=999999">
<img width=80px height=25px src="https://img.shields.io/badge/-Yarn-2C8EBB?style=flat&logo=Yarn"> &nbsp;
<img width=80px height=25px src="https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=ESLint">&nbsp;
<img width=80px height=25px src="https://img.shields.io/badge/-Prettier-1b2b34?style=flat&logo=Prettier">&nbsp;

* 스타일은 css만 사용

## 과제 내용

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/40421183/153720192-c9882027-9c87-40c9-9ab3-5f2cedc8d95d.gif)

요구사항, 추가 요구사항을 전부 구현했습니다.


## 데이터가 없을때 보여주는 화면, 에러 상황때 보여주는 화면 시뮬레이션 

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/40421183/153721896-1366dd68-27b6-4f3f-bfee-41e8c409c6ca.gif)


## 특이사항 

- typescript를 사용했습니다.

- redux, redux-saga 를 사용했습니다.

- npm 대신 yarn 를 사용했습니다.

- @craco/craco, croco-alias 사용했습니다. (for import alias)

- 이미지 preload 구현했습니다.(/list에서 바로 다음 5개만 순서대로)

- 비동기 데이터를 fetch 했을때 data, loading, error, empty 상태를 redux와 redux-saga로 처리했습니다.
(car list와 car 둘 다 redux saga로 처리했습니다.)

- loading spinner를 css로 구현했습니다.
