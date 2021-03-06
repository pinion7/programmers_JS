function solution(strings, n) {
  // 분석
  // sort를 잘 활용해야 한다.
  // 다만 내부에서 문자열을 비교할 수 있어야 하기 때문에
  // 개인적으로 일단 생각나는 것은 아스키 코드다. 이를 활용해 보겠다.
  
  // 풀이 - 사전식 정렬 사전에 진행
  // 아스키 코드에 대한 정보는 구글링을 통해 찾아보기 바란다.
  // 일단 간단히 설명하면 a의 아스키코드 번호는 97이며, b는 98, c는 99 ...
  // 이런식으로 순차적으로 커지는 개념이라고 할 수 있다.
  // 처음에 sort()부터 해준다. 이유는 같은 문자열일 경우에 사전식으로 정렬해줘야하기 때문에
  // 미리 사전식 정렬을 진행한 후, n번째 인덱스에 따른 정렬을 해주면 좋다.
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}