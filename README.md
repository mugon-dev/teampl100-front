## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## structure

### axios singleton

```
utils/withAxios.ts
동일한 옵션을 가진 axios 인스턴스 사용
```

### Api error handling

```
axios intercetpor에서 공공데이터 포털에서 정의된 error 코드에 따라 Error 메세지를 trow로 던짐
Error boundary에서 감지하여 error fallback으로 전송
공공데이터에서 정의된 에러가 아닐경우 메인페이지로 이동
```

### suspense

```
suspense와 react-loading-skelton을 사용하여 로딩 ui 추가
```

### axios react-query

```
react query를 사용하여 axios 상태 관리
react-query hydrate 이용하여 getserverside에서 pre-fetch (ssr)
```

### boundary

```
error boundary, suspense를 묶어 asyncboundary로 범위 지정
```

### styled-components , local font

```
document에서 styled compoenents ssr 적용 및 local 폰트 불러옴
styles/globalstyle.ts 에서 font 정의 및 css reset
```
