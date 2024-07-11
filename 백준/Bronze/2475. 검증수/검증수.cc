/**
 * @brief 검증수
 * 총 6자리의 고유 번호: 첫 5자리 (0~99999) + 맨 뒷자리 검증수
 * 검증수: 고유번호의 첫 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지 
 * 입력: 고유번호의 처음 5자리 숫자
 */
#include <iostream>
using namespace std;

int main() {
    int a[5];
    for(int i = 0; i < 5; i++) {
        cin >> a[i];
    }

    int result = 0;
    for (int i = 0; i < 5; i++) {
        result += a[i] * a[i];
    }

    cout << result % 10;
    return 0;
}