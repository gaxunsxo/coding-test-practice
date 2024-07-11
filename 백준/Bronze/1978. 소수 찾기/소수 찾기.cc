/**
 * 1978: 소수 찾기
 * 주어진 수 N개 중에서 소수가 몇 개인지 찾아 출력
 */
#include <iostream>
using namespace std;

// 제곱근을 이용한 방법
// ex) n = 9; 1, 3, 9
// i*i = 9 -> not prime
// ex) n = 11; 1, 11
// i*i = 9 -> is prime
bool is_prime(int n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (int i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;

    int count = 0;
    for (int i = 0; i < n; i++) {
        int num;
        cin >> num;
        if (is_prime(num)) count++;
    }

    cout << count << endl;
    return 0;
}