/**
 * 11866: 요세푸스 문제 0
 * (N, K) - 요세푸스 순열(= 원에서 사람들이 제거되는 순서)을 구하는 프로그램
 * ex) (7, 3) - <3, 6, 2, 7, 5, 1, 4> 
 */
#include <iostream>
#include <queue>

using namespace std;

int main() {
    int N, K;
    cin >> N >> K;

    /**
     * [기본 알고리즘]
     * 1. 큐에 숫자를 삽입
     * 2. K번째 사람이 맨 앞으로 오도록 만듦
     * 3. K번째 수를 출력 & pop
     */

    queue <int> q;
    for (int i = 1; i <= N; i++) {
        q.push(i);
    }

    cout << "<";
    int count = 1;

    while (!q.empty()) {
        if (count % K == 0) {
            // K번째 원소를 output으로 보내고 해당 원소를 삭제 
            int ans = q.front();
            q.pop();
            if (q.empty()) {
                cout << ans << ">";
            } else {
                cout << ans << ", ";
            }
        } else {
            // 맨 앞의 원소를 맨 뒤로 보냄 
            q.push(q.front());
            q.pop();
        }

        count++;
    }

    return 0;
}