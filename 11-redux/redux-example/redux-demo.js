const redux = require('redux');

// 리듀서 함수는 2개의 파라미터(기존의 상태, 발송된 액션)를 받는다.
// 또한 어떤 출력을 리턴해야 한다.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state;
};

// 저장소 생성하기
const store = redux.createStore(counterReducer);

// 저장소 구독하기
const counterSubscriber = () => {
  // createStore()로 생성된 저장소에서 사용, 업데이트 후 최신 상태 스냅샷을 제공한다.
  const latestState = store.getState();
  console.log(latestState);
};

// 리덕스가 구독 함수를 인식하고 상태가 변경될 때마다 함수를 실행하도록 함. (subscribe() 메소드를 통해)
store.subscribe(counterSubscriber);

// dispatch() = 액션을 발송하는 메소드, 식별자 역할을 하는 타입 프로퍼티를 가진 자바스크립트 객체이다.
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });