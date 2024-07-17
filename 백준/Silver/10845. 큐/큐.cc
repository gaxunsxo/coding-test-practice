/**
 * 10845: 큐
 * 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램
 */

#include <iostream>
#include <queue>
#include <string>

using namespace std;

int main() {
    int N;
    cin >> N;

    queue<int> q;

    string action;
    int X = 0;
    while (N--) {
        cin >> action;

        if (action.compare("push") != 0) {
            // front, back, size, empty, pop
            if (action.compare("front") == 0) {
                // front: 큐의 가장 앞에 있는 정수 출력; 없으면 -1 출력
                q.size() != 0 ? cout << q.front() : cout << -1;
            } else if (action.compare("back") == 0) {
                // back: 큐의 가장 뒤에 있는 정수 출력; 없으면 -1 출력
                q.size() != 0 ? cout << q.back() : cout << -1;
            } else if (action.compare("size") == 0) {
                // size: 큐에 들어있는 정수의 개수를 출력
                cout << q.size();
            } else if (action.compare("empty") == 0) {
                // empty: 큐가 비어있으면 1, 아니면 0을 출력
                q.size() == 0 ? cout << 1 : cout << 0;
            } else {
                // pop: 큐에서 맨 앞에 있는 정수를 빼어 출력; 없으면 -1 출력
                if (q.size() == 0) {
                    cout << -1;
                } else {
                    cout << q.front();
                    q.pop();
                }
            }

            cout << endl;
        } else {
            // push X: 정수 X를 큐에 넣는 연산; 출력 없음
            cin >> X;
            q.push(X);
        }
    }
}