#include <iostream>
#include <sstream>

using namespace std;

int arr[10001]; // 카운터를 위한 배열

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  
  int n;
  cin >> n; // N개의 수를 오름차순 정렬
  
  // 숫자 개수 카운트
  int cnt;
  for (int i = 0; i < n; i++) {
    cin >> cnt;
    arr[cnt]++;
  }

  // 각 숫자를 개수만큼 출력
  for (int i = 1; i <= 10000; i++) {
    while (arr[i]) {
            cout << i << '\n';
            arr[i]--;
     }
  }
  return 0;
}