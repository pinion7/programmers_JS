function solution(n) {
  // 분석
  // 이러한 문제는 법칙 발견이 중요하다
  // n까지 도달하는 최선의 방법은 항상 n의 절반까지 이동한 뒤 순간이동을 하는 것이다.
  // 그랬을 때 최소한의 점프 횟수가 산출 가능하다.
  // 보통 n이 짝수면 절반시점에서서 순간이동으로 한번에 도착하겠지만 
  // n이 홀수면 마지막으로 +1 점프를 해줘야만 한다.
  // 헌데 작은 수일 때는 절반까지 가는 경우가 어렵지 않겠지만, 숫자가 커질 수록
  // 절반에 가기 위하여 그 절반의 절반 시점으로 이동을 해야하는 상황이 중첩되게 된다.
  // 이 특징은 우리가 n이라는 수를 2로 나누었을 때, 
  // 나누어 떨어졌느냐 떨어지지 않았느냐와 연관시킬 수 있다.
  // 즉, 나누어 떨어졌다는 건 절반시점에 가는 데 있어 추가점프가 없었다는 얘기이며
  // 나누어 떨어지지 않았다는 건(즉, 1이 남았다는 건) 추가 점프로 그 1을 상쇄시켜줘야 한다는 것이다.
  // 결과적으로 n을 2로 나눈 몫을 다시 2로 나누는 방식으로 반복을 하되
  // 그 과정에서 나머지가 1이 나온 횟수를 카운트하면 곧 총 점프 횟수를 구할 수 있는 셈인 것이다.
  // 이는 신기하게도 10진수를 2진수화 시키는 과정과 동일하다.
  // 원초적인 풀이와 비트 수를 카운트하는 풀이 각 2가지로 풀이해 보겠다.
  
  // 풀이 1 - 베이직한 풀이
  // 몫을 지속적으로 나눠주는데 나머지가 1일 때만 카운트를 올려준다.
  let count = 0;
  // n이 0이 되면(몫이 0이 되면) 도착한 것이므로 탈출
  while (n !== 0) {
      // 나머지가 1이면 카운트 올려주고, 몫의 정수부분만 n에 대입
      if (n % 2 === 1) {
          ++count;
          n = parseInt(n / 2);
      }
      // 나머지가 0이면, 순간이동 성공이므로 몫을 그대로 n에 대입
      else n = n / 2;
  }
  
  return count;
}