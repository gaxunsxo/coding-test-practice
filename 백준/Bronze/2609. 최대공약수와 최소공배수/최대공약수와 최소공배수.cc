/**
 * 2609: 최대공약수와 최소공배수
 * 두 수의 최대공약소와 최소공배수 출력 
 */
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int min, max;
    int cnt = 1;
    while (1) {
        if (cnt <= n && cnt <= m && n % cnt == 0 && m % cnt == 0) {
            min = cnt;
        } 

        if (cnt >= n && cnt >= m && cnt % n == 0 && cnt % m == 0) {
            max = cnt;
            break;
        }

        cnt++;
    }

    cout << min << endl << max << endl;

    return 0;
}
