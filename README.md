# 제네시스 프로모션 사이트 (React)

## 1. 소개
	제네시스 사이트의 프로모션 사이트를 가상으로 생각하고 작업했으며, 기존에 HTML, CSS, JS만 사용햇 ㅓ제작한 사이트를 React로 추가 제작했습니다.
   
## 2. 배포주소
	[https://ejonghwan.github.io/genesis_react/](https://ejonghwan.github.io/genesis_react/)

## 3. 사용기술 
	React, Redux, Redux-saga, Redux-toolkit, React-query, SASS, Javascript, 카카오맵 API, EmailJS, 플리커 API, 유튜브 API


## 3. 사용기술 
### 4-1. 전체
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/dc048483-c822-4de4-aa62-472ac7b85ea1" width="70%" height="auto"></img>
### 4-2. 컴포넌트
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/9071f667-de6d-4b10-b85a-c4f4e96f8d5a" width="70%" height="auto"></img>

## 4. 상태관리
	* Redux, Redux-saga   
	Redux, Redux-saga 적용하면서 하나의 요청 응답을 만들면서도 Reducer 상태와  REQUEST / SUCCESS / FAILUE 액션타입과 케이스, Redux-saga의  watch함수 put 함수 api 요청함수를 만들며 이런 몇가지의 요청기능에 많은 소스가 불필요하다고 생각했습니다.
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/a3b00999-5a1f-447b-9ac5-5b9ddd93b43c" width="70%" height="auto"></img>

	* Redux-toolkit    
	Redux, Saga에서는 액션과 사가파일들이 너무 많아 소스 + 파일이 너무 많았지만 toolkit에서는 액션도 자동으로 생성해주고 사가를 쓰지 않고 비동기 데이터를 pending fulfilled, rejected로 관리할 수 있기도 하고 상태들을 Slice에서  볼 수 있는 것도 코드 가독성면에서 좋다고 생각했습니다. 
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/7378488b-ecb2-4c70-b0ba-9d728aa4ea19" width="70%" height="auto"></img>

	* React-query   
	서버 데이터를 클라이언트 스토어에서 관리할 필요도 없었고 몇개 안되는 API 요청인데 Redux-toolkit도 너무 번잡해보였습니다.   그래서 클라이언트 상태는 Context API로, 서버 데이터는 React-query를 커스텀 훅으로 만들어 간단하게 처리해보고 query에서 지원해주는 데이터 캐시도 적용해봤습니다.
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/c1a9da59-e86c-4066-a6d8-c5af9ae6cab1" width="70%" height="auto"></img>



## 4. 기능
### 4-1. 반응형 작업
![반응형](https://github.com/ejonghwan/genesis/assets/53946298/9b7ddc73-225e-4f99-93dc-d0f54f8e8a1a)

### 4-2. 최적화 작업
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/962dca6e-05da-4611-a0db-c559b2d6975b" width="40%" height="auto"></img>
#### 성능 개선을 위해 고민한 부분들
	* 사이트 특성상 동영상, 이미지의 퀄리티를 포기할 수 없는데 그대로 쓰기에는 너무 무겁고 양도 많아서 아래 사항들을 개선 
	* ㅁㄴㅇㅁㄴㅇㅁㄴㅇ
	* ㅁㄴㅇㅁㄴㅇㅁㄴㅇ
	* ㅁㄴㅇㅁㄴㅇㅁㄴㅇ





### 4-3. 메인
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/f376f636-ee92-4117-a694-ecaf90b0abae" width="50%" muted  autoplay loop></video>
##### 기능 설명
	* 메인은 풀 사이즈 동영상 리소스를 활용했습니다.
	* 첫 번째 DOM 요소는 이전 요소로 숨겨져 있고 다음 버튼을 누르면 DOM 순서 변경됩니다.
	* 메인에서 필요한 2개의 폰트와 Poster 이미지 2개는 Preload하여  LCP 개선 및  FOIT, FOUT 최소화 했습니다.
	* 슬라이드의 동영상은 재생되고 있는 부분을 제외한 영상들 모두 reset & stop 동적 제어됩니다.
	* 이전/다음 버튼을 누르기 전 리소스들은 IMG로 대체. 무거운 동영상 파일 요청하지 않게 최적화 했습니다.



### 4.4. 갤러리
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/a252af15-98b9-4232-adc6-4df3ee8076b6" width="50%" muted  autoplay loop></video>
##### 기능 설명
* 플리커 API를 활용하여 내 갤러리에 제네시스 IMG를 등록 후 제네시스 갤러리를 만들었습니다.
* 검색 기능에서 제네시스를 검색하면 다른 유저들이 올린 제네시스 IMG를 볼 수 있습니다.
* IMG List 클릭 시 팝업 생성되며 본 사이즈 IMG 리소스를 화면에 표시합니다.


### 4-5. 콘택
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/644d5498-89df-4baf-a644-fe3ce533195d" width="50%" muted  autoplay loop></video>
##### 기능 설명
* map info json의 데이터를 받아 동적으로 지점, 주소, 전화, 보유차량 등을 뿌려주는데 Kakao API와 연결하는데 순서 주의하며 작업했습니다.
* Data를 JSON파일로 관리하며 각 지점 클릭시 맵을 이동 시킵니다.
* Email JS  서비스를 이용해서 사용자가 문의를 보내면 내 이메일로 전송되게 작업했습니다.
* 브라우저 리사이즈할 때 맵을 가운데로 이동시키는데 debounce 적용했습니다.


### 4-6. 유튜브
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/09496ce9-4026-4d58-b102-c6df840e6c61" width="50%" muted  autoplay loop></video>
##### 기능 설명
* Youtube API를 활용하여 특정 목록을 화면에 노출시켰습니다.
* 동영상 썸네일을 클릭하면 팝업이 뜨고 유튜브 영상을 볼 수 있습니다.


### 4-7. 커뮤니티
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/7ce20593-ccd6-4e86-b2fd-9ede3516d431" width="50%" muted  autoplay loop></video>
##### 기능 설명
* 스크롤에 반응하여 인터렉션을 넣었습니다. 
* 많은 스크롤과 위치 정보량을 한곳에서 관리하게끔 작업했고 특정 계산을 하는 함수를 재사용하여 작업했습니다. 



## UI Component는 접근성과 사용성을 고려해서 아래 처럼 제작했습니다. 
### 탭 UI
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/50e4bff4-4b02-4b22-9502-282a0224fc03" width="70%" height="auto"></img>

### 아코디언 UI 
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/f07c4014-e6d7-4ab8-8aa7-2cc77ca0db4c" width="70%" height="auto"></img>


