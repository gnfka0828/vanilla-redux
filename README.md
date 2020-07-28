# Vanilla Redux
# Vanilla JS : 어떠한 라이브러리나 프레임워크를 쓰지 않는 자바스크립트

Learning Vanilla-Redux and React-Redux

https://geonlee.tistory.com/32 : npx 

https://velopert.com/241 : global module 설치 시 link해 줘야 함

https://paulkogel.gitbooks.io/redux-docs/content/docs/introduction/ThreePrinciples.html : Three Principles of Redux

https://medium.com/@ca3rot/redux-%EC%9E%85%EB%AC%B8-10%EB%B6%84%EC%9C%BC%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-redux-%EA%B8%B0%EC%B4%88-3-a18222084f3a : Reducer 공식문서

https://likejirak.tistory.com/66 : Hashrouter vs Browserrouter

https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually : React-router urls don't work when refreshing or writing manually

https://ko.reactjs.org/docs/fragments.html : React Fragment 문법

https://ismydream.tistory.com/98 : event.stopPropagation(), event.preventDefault()

https://medium.com/@khwsc1/event-preventdefault-%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%B7%A8%EC%86%8C-%EB%B0%A9%EB%B2%95-71d1343baac : onSubmit 기본 기능(Refresh)을 막는 방법

https://enfanthoon.tistory.com/133 : onSubmit Refresh 사례

https://velopert.com/1266 : React-Redux

https://kamang-it.tistory.com/entry/React-12react-redux%EB%A1%9C-redux%EB%8D%94-%EC%A7%81%EA%B4%80%EC%A0%81%EC%9D%B4%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 : ownProps 설명

Add 버튼 클릭 시 동작: 
1) onChange 함수 실행 => setText(text) 함수 실행 => component 내의 state 변경, mapStateToProps 함수로 인해 toDos: state가 Home Component의 Props로 들어간다.
2) onSubmit 함수 실행 => addToDo(text) 함수 실행 => mapDispatchToProps 함수에 지정된 addToDo 함수로 인해 actionCreaters의 addToDo 함수를 이용하여 action 객체 생성 후, dispatch된다. => reducer에 의해 store 내의 state가 갱신된다.

Delete 버튼 클릭 시 동작: 
1) onClick 함수 실행 => onBtnClick 함수 실행 => mapDispatchToProps 함수에 지정된 onBtnClick 함수로 인해 actionCreaters의 deleteToDo 함수를 이용하여 action 객체 생성 후, dispatch된다. => reducer에 의해 store 내의 state가 갱신된다.

https://john015.netlify.app/react-router-v-5-1-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%8B%AC%EB%9D%BC%EC%A1%8C%EC%9D%84%EA%B9%8C : React-Router 객체 설명

https://dev-momo.tistory.com/entry/Javascript-Optional-Chaining : Javascript Optional Chaining