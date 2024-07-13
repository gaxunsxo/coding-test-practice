/**
 * 11650: 좌표 정렬하기
 * x좌표가 증가하는 순으로, 같다면 y좌표가 증가하는 순으로 정렬
 */
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// 시간 초과
/* int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> points; // 가변 길이로 정의
    int x, y;

    for (int i = 0; i < n; i++) {
        // 좌표 입력 받기
        scanf("%d %d", &x, &y);
        points.push_back(make_pair(x, y));

        // 좌표 비교
        pair<int, int> tmp;
        for (int j = 0; j < points.size(); j++) {
            if (points[i].first < points[j].first) {
                // 입력된 x좌표가 기존의 좌표보다 작은 경우
                tmp = points[i];
                points[i] = points[j];
                points[j] = tmp;
            } else if (points[i].first == points[j].first) {
                // x좌표가 같은 경우
                if (points[i].second < points[j].second) {
                    tmp = points[i];
                    points[i] = points[j];
                    points[j] = tmp;
                }
            }
        }
    }

    for (int i = 0; i < n; i++) {
        printf("%d %d\n", points[i].first, points[i].second);
    }

    return 0;
} */

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> points; // 가변 길이로 정의
    int x, y;

    for (int i = 0; i < n; i++) {
        // 좌표 입력 받기
        scanf("%d %d", &x, &y);
        points.push_back(make_pair(x, y));
    }

    // 정렬 수행
    sort(points.begin(), points.end());

    for (int i = 0; i < n; i++) {
        printf("%d %d\n", points[i].first, points[i].second);
    }

    return 0;
}