# [Bronze IV] 숫자의 합 - 11720 

[문제 링크](https://www.acmicpc.net/problem/11720) 

### 성능 요약

메모리: 1112 KB, 시간: 0 ms

### 분류

구현, 수학, 문자열

### 제출 일자

2024년 2월 10일 21:04:33

### 문제 설명

<p>N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.</p>

### 출력 

 <p>입력으로 주어진 숫자 N개의 합을 출력한다.</p>

### 개념
n을 입력받은 뒤, char형 배열에 string 형태로 숫자를 입력받았습니다. 그러면 arr 배열에 처음부터 들어갑니다.
123을 입력하면 arr[0]에 '1', arr[1]에 '2', arr[2]에 '3'이 입력됩니다. 
for 문에서 값을 더하고 있는데 그냥 더하면 char형이기 때문에 아스키코드 값이 더해집니다. 그러므로 '0'을 빼서 아스키코드 값이 실제 숫자 값에 대응할 수 있도록 하였습니다.
123이 입력되었다 가정하면

'1' - '0' = 49 - 48 = 1

'2' - '0' = 50 - 48 = 2

'3' - '0' = 51 - 48 = 3 이 되므로
sum에 입력된 각 자리 값을 더할 수 있습니다.
