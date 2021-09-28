function solution(s) {
  // 분석
  // 문자의 첫 글자만 대문자로 바꿔줘야 하고,
  // 나머지 부분은 소문자로 변환하여 둘을 합쳐주면 된다.
  
  // 풀이
  // 스플릿을 사용한다. 단, 주의해야할 점은 연속되는 공백의 존재유무다.
  // 연속 공백이 한칸이 아닌 두칸일 경우에는, 공백 자체가 배열화된다.
  // 이를 고려하지 않고 대문자화시키고자 하면 에러가 날 수밖에 없다.
  // 공백은 공백으로 리턴해주고 그 외의 문자에 대해서만 변환을 진행해야 한다.
  const newS = s.split(' ').map(str => {
      if (str === '') return ''; 
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
  })
  
  // 다시 한칸 공백을 주어 join하면, 올바른 결과를 반환할 수 있다.
  return newS.join(' ');
}