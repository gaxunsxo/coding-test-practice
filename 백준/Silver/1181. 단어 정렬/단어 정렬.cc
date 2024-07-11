/**
 * 1181: 단어 정렬
 * 정렬 조건 - 1. 길이가 짧은 것부터, 2. 길이가 같으면 사전 순으로
 * 단, 중복된 단어는 하나만 남기고 제거해야 함
 */
#include <iostream>
#include <vector>
#include <string>
#include <algorithm> // sort()를 사용하기 위함
using namespace std;

bool compare(const string& a, const string& b) {
    if (a.length() != b.length()) {
        return a.length() < b.length();
    } else {
        return a < b;
    }
}

int main() {
    int n;
    cin >> n;

    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }

    // sort() 함수의 세 번째 인자는 비교 함수의 역할을 하는 함수 포인터
    // words.begin(), words.end() - 배열의 시작과 끝 반복자
    sort(words.begin(), words.end(), compare);

    // unique(): 연속된 중복 요소 제거, 유일한 요소들의 범위 반환
    // -> 하지만 실제 벡터의 크기는 변경되지 않음 *중복 요소들은 여전히 벡터 내부에 존재
    // => 따라서 erase를 통해 유일한 요소만 남겨야 함
    words.erase(unique(words.begin(), words.end()), words.end());

    for (const auto& word : words) {
        cout << word << endl;
    }

    return 0;
}