/**
 * 2751: 수 정렬하기 2
 * N개의 수를 오름차순으로 정렬하는 프로그램
 * 시간 초과 -> 입출력 문제?
 */
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    scanf("%d", &n);

    std::vector<int> numbers(n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &numbers[i]);
    }

    std::sort(numbers.begin(), numbers.end());

    for(int i = 0; i < n; i++) {
        printf("%d\n", numbers[i]);
    }

    return 0;
}
