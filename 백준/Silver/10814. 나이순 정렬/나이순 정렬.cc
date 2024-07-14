/**
 * 10814: 나이 순 정렬
 * 나이 순서 대로 회원들을 정렬,
 * 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬
 */
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(const pair<int, string> &a, const pair<int, string> &b) {
    return a.first < b.first;
}

int main() {
    int n;
    cin >> n;

    vector<pair<int, string>> lists(n);

    for (int i = 0; i < n; i++) {
        // 회원 정보 입력
        cin >> lists[i].first >> lists[i].second;
    }

    // 나이 순으로 정렬
    // 안전 정렬 -> 순서가 보장됨
    stable_sort(lists.begin(), lists.end(), compare);

    for (const auto& pair : lists) {
        cout << pair.first << " " << pair.second << endl;
    }

    return 0;
}