/**
 * 10816: 숫자 카드 2
 * 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드의 개수를 구하는 프로그램
 * 시간 초과 문제 
 */
#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
#define fastio ios::sync_with_stdio(0), cin.tie(0), cout.tie(0)

using namespace std;


int main() {
    fastio;
    int N, M, input;
    cin >> N;

    vector<int> cards;
    while (N--) {
        cin >> input;
        cards.push_back(input);
    }

    sort(cards.begin(), cards.end());

    cin >> M;
    while (M--) {
        cin >> input;
        cout << upper_bound(cards.begin(), cards.end(), input) - lower_bound(cards.begin(), cards.end(), input) << " ";
    }
    cout << endl;

    return 0;
}