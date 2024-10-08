#include <iostream>
#include <queue>

using namespace std;

int main() {
    int N, K;
    cin >> N >> K;

    queue<int> q;
    for (int i = 1; i <= N; i++) {
        q.push(i);
    }

    int count = 1;
    cout << "<";
    while (!q.empty()) {
        if (count % K == 0) {
            int ans = q.front();
            q.pop();
            if (!q.empty()) {
                cout << ans << ", ";
            } else {
                cout << ans << ">";
            }
        } else {
            q.push(q.front());
            q.pop();
        }

        count++;
    }

    return 0;
}