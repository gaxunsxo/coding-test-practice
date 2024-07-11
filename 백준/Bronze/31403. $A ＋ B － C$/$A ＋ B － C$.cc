/**
 * A + B - C
 * - 수로 생각했을 때의 출력
 * - 문자로 생각했을 때의 출력
 */
#include <iostream>
#include <string>
using namespace std;

int main() {
    int input[3];
    for (int i = 0; i < 3; i++) {
        cin >> input[i];
    }

    string result = "";
    result = to_string(input[0]) + to_string(input[1]);

    cout << input[0] + input[1] - input[2] << endl;
    cout << stoi(result) - input[2] << endl;
}