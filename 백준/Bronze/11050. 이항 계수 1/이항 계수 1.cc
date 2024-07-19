/**
 * 11050: 이항 계수 1
 * 자연수 N, 정수 K가 주어졌을 때 이항 계수를 구하는 프로그램 
 * (n, k) = nCk = n! / k!(n-k)!
 */
#include <iostream>

using namespace std;

int factorial(int num) {
    if (num <= 1) {
        return 1;
    } 
    
    return num * factorial(num - 1);
}

int main() {
    int N, K;
    cin >> N >> K;

    cout << factorial(N) / (factorial(K) * factorial(N-K)) << endl;

    return 0;
}