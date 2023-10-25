# 제네시스 프로모션 사이트 (React)

## 1. 소개
제네시스 사이트의 프로모션 사이트를 가상으로 생각하고 작업했으며, 기존에 HTML, CSS, JS만 사용해서 제작한 사이트를 React로 추가 제작했습니다.
   
이 사이트를 제작하기 위해 React, 
&nbsp;
&nbsp;
****
&nbsp;
&nbsp;

## 2. 배포주소
[https://ejonghwan.github.io/genesis_react/](https://ejonghwan.github.io/genesis_react/)

   
&nbsp;
&nbsp;
****
&nbsp;
&nbsp;



## 3. 사용기술 
React, Redux, Redux-saga, Redux-toolkit, React-query, SASS, Javascript, 카카오맵 API, EmailJS, 플리커 API, 유튜브 API


&nbsp;
&nbsp;
****
&nbsp;
&nbsp;

## 4. 폴더 구조

### 4-1. 전체
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/dc048483-c822-4de4-aa62-472ac7b85ea1" width="70%" height="auto"></img>
### 4-2. 컴포넌트
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/9071f667-de6d-4b10-b85a-c4f4e96f8d5a" width="70%" height="auto"></img>
   
&nbsp;
&nbsp;
****
&nbsp;
&nbsp;


## 5. 상태관리
상태관리 학습하면서 3가지를 사용해봤습니다.   

* Redux, Redux-saga   
Redux, Redux-saga 적용하면서 하나의 요청 응답을 만들면서도 Reducer 상태와   
   REQUEST / SUCCESS / FAILUE 액션타입과 케이스, Redux-saga의  watch함수 put 함수 api 요청함수를 만들며   
   이런 몇가지의 요청기능에 많은 소스가 불필요하다고 생각했습니다.
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/a3b00999-5a1f-447b-9ac5-5b9ddd93b43c" width="70%" height="auto"></img>

* Redux-toolkit    
	Redux, Saga에서는 액션과 사가파일들이 너무 많아 소스 + 파일이 너무 많았지만 toolkit에서는 액션도 자동으로 생성해주고   
  사가를 쓰지 않고 비동기 데이터를 pending fulfilled, rejected로 관리할 수 있기도 하고 상태들을 Slice에서   
  볼 수 있는 것도 코드 가독성면에서 좋다고 생각했습니다. 
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/7378488b-ecb2-4c70-b0ba-9d728aa4ea19" width="70%" height="auto"></img>

* React-query   
	서버 데이터를 클라이언트 스토어에서 관리할 필요도 없었고 몇개 안되는 API 요청인데 Redux-toolkit도 너무 번잡해보였습니다.   
  그래서 클라이언트 상태는 Context API로, 서버 데이터는 React-query를 커스텀 훅으로 만들어   
  간단하게 처리해보고 query에서 지원해주는 데이터 캐시도 적용해봤습니다.
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/c1a9da59-e86c-4066-a6d8-c5af9ae6cab1" width="70%" height="auto"></img>

   
&nbsp;
&nbsp;
****
&nbsp;
&nbsp;


## 6. 기능
### 6-1. 반응형 작업
![반응형](https://github.com/ejonghwan/genesis/assets/53946298/9b7ddc73-225e-4f99-93dc-d0f54f8e8a1a)
&nbsp;
&nbsp;
&nbsp;
### 6-2. 최적화 작업
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/962dca6e-05da-4611-a0db-c559b2d6975b" width="40%" height="auto"></img>
#### 성능 개선을 위해 고민한 부분들   

사이트 특성상 동영상, 이미지의 퀄리티를 포기할 수 없는데 그대로 쓰기에는 너무 무겁고 양도 많아서 아래 사항들을 개선했습니다.   

* SPA 특징 중 하나인 처음 로딩할 때 JS가 너무 커서 느린 것들을 lazy를 사용해서 필요한 JS만 먼저 불러오게끔 모듈을 분리했습니다.
* memo와 useCallback, useMemo를 사용해서 조금 큰 작업들은 메모이제이션 처리해두었습니다. 무분별하게 함수를 메모이제이션하면 없애야할 함수조차도 가비지컬렉터가 없애지 않기 때문에 주의하면서 작업했습니다. 
* 첫 로딩 시 화면에 필요한 리소스만 가져올 수 있을까 ?  (Performance 30% 가량 개선) 
  * 메인 비주얼 6개의 동영상 중 처음 재생되는 동영상만 metadata를 로드하고 제외하고 모두 preload: none 적용.
  * 다른 동영상을 로드하지 않으니 빈 박스로 보이는 이슈 발생. video poster로 해결
  * poster IMG로 변경하니 CLS 이슈 발생.  문제가 발생되는 IMG 2장과 font를 preload 하여 Load 시점을 조정하여 해결
  * 메인 비주얼을 제외한 하단 이미지들을 Intersection Observer API를 활용하여 특정 구간에 도달하면 Load 
* UI 상 고퀄리티 차량 이미지를 겹쳐 사용하는데 이미지 용량을 줄일 수 있을까?  (Performance 15% 가량 개선)
  * png, jpg 보다 압축률이 낮아 퀄리티가 좋지만 용량은 더 낮은 .webp 활용   (이미지 개당 용량 100kb -> 20kb)
  * 이슈. 아직 webp를 지원하지 않는 브라우저를 위해  picture 태그로 분기처리.  webp를 지원하지 않으면 jpg가 보임
  * woff2 사용으로 용량 줄임
* Tab, Slide 보이지 않는 부분은 나중에 로드 시킬 수 있을까?
  * lazy 사용.
* 리플로우 최대한 제거
  * 레이아웃이 이루어진 HTML CSS가 다시 레이아웃이 되는 것을 최대한 막음. 리플로우가 발생하지 않는 CSS 사용 
* JS 병목현상 최대한 제거
  * 자주 호출되는 이벤트에 쓰로틀, 디바운스 적용   




&nbsp;
&nbsp;
&nbsp;


### 6-3. 메인
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/f376f636-ee92-4117-a694-ecaf90b0abae" width="50%" muted  autoplay loop></video>
##### 기능 설명
* 메인은 풀 사이즈 동영상 리소스를 활용했습니다.
* 첫 번째 DOM 요소는 이전 요소로 숨겨져 있고 다음 버튼을 누르면 DOM 순서 변경됩니다.
* 메인에서 필요한 2개의 폰트와 Poster 이미지 2개는 Preload하여  LCP 개선 및  FOIT, FOUT 최소화 했습니다.
* 슬라이드의 동영상은 재생되고 있는 부분을 제외한 영상들 모두 reset & stop 동적 제어됩니다.
* 이전/다음 버튼을 누르기 전 리소스들은 IMG로 대체. 무거운 동영상 파일 요청하지 않게 최적화 했습니다.
* 자동차 정보가 있는 탭은 기능상 몇백장이 넘는 고화질 이미지가 사용되는데 처음에 보이는 이미지 외엔 모두 필요할 때 다운받게끔 Intersection Observer를 사용해서 Image Lazy Load Component를 작업했습니다.
* 각 탭을 누를 때 Lazy와 Suspense를 적용하여 해당 컴포넌트는 부르기 전에는 필요 리소스와 모듈을 불러오지 않습니다.

&nbsp;
&nbsp;
&nbsp;

### 6-4. 갤러리
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/a252af15-98b9-4232-adc6-4df3ee8076b6" width="50%" muted  autoplay loop></video>
##### 기능 설명
* 플리커 API를 활용하여 내 갤러리에 제네시스 IMG를 등록 후 제네시스 갤러리를 만들었습니다.
* 검색 기능에서 제네시스를 검색하면 다른 유저들이 올린 제네시스 IMG를 볼 수 있습니다.
* IMG List 클릭 시 팝업 생성되며 본 사이즈 IMG 리소스를 화면에 표시합니다.
* 유저가 프로필 이미지를 등록 안했을 경우 서버에러가 나는 이슈와 Masonry 라이브러리와의 순서 이슈를 함수의 순서를 Promise 사용으로 동기적으로 변경해서 해결했습니다.
* 상태관리를 React-query로 작업한 버전에서는 데이터 캐시 기능을 사용해서 두번째 접속부터는 API요청을 하지 않도록 작업했습니다.
&nbsp;
&nbsp;
&nbsp;

### 6-5. 콘택
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/644d5498-89df-4baf-a644-fe3ce533195d" width="50%" muted  autoplay loop></video>
##### 기능 설명
* map info json의 데이터를 받아 동적으로 지점, 주소, 전화, 보유차량 등을 뿌려주는데 Kakao API와 연결하는데 순서 주의하며 작업했습니다.
* Data를 JSON파일로 관리하며 각 지점 클릭시 맵을 이동 시킵니다.
* Email JS  서비스를 이용해서 사용자가 문의를 보내면 내 이메일로 전송되게 작업했습니다.
* 브라우저 리사이즈할 때 맵을 가운데로 이동시키는데 debounce 적용했습니다.

&nbsp;
&nbsp;
&nbsp;

### 6-6. 유튜브
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/09496ce9-4026-4d58-b102-c6df840e6c61" width="50%" muted  autoplay loop></video>
##### 기능 설명
* Youtube API를 활용하여 특정 목록을 화면에 노출시켰습니다.
* 동영상 썸네일을 클릭하면 팝업이 뜨고 유튜브 영상을 볼 수 있습니다.
&nbsp;
&nbsp;
&nbsp;

### 6-7. 커뮤니티
<video src="https://github.com/ejonghwan/genesis_react/assets/53946298/7ce20593-ccd6-4e86-b2fd-9ede3516d431" width="50%" muted  autoplay loop></video>
##### 기능 설명
* 리액트에서의 기본적인 글보기, 생성, 수정, 삭제 기능을 구현했습니다. 생성된 데이터는 상태에 업데이트 되어 Footer 커뮤니티에 노출됩니다.

&nbsp;
&nbsp;
&nbsp;

## UI Component 제작 예시 2개 
UI Component는 접근성과 사용성을 고려해서 아래 처럼 제작했습니다. 
### 탭 UI
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/50e4bff4-4b02-4b22-9502-282a0224fc03" width="70%" height="auto"></img>

### 아코디언 UI 
<img src="https://github.com/ejonghwan/genesis_react/assets/53946298/f07c4014-e6d7-4ab8-8aa7-2cc77ca0db4c" width="70%" height="auto"></img>


