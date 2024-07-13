/**
 * 1259: palindrome 수
 * 입력의 마지막 줄은 0이 주어짐
 */
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    vector<string> results; // "yes" or "no"

    while (1) {
        string input;
        cin >> input;
        if (input[0] == '0') break;
       
        int len = input.length();
        
        bool is_palin = false;

        if (len == 1) {
            // 길이가 1인 경우
            is_palin = true; 
        } else {
            for (int i = 0; i < len / 2; i++) {
                if (input[i] == input[len - i - 1]) {
                    is_palin = true;
                } else {
                    is_palin = false;
                    break; // 내부에서 한 번이라도 false인 경우 break
                }
            }
        }
        if (is_palin) results.push_back("yes");
        else results.push_back("no");
    }

    for (int i = 0; i < results.size(); i++) {
        cout << results[i] << endl;
    }

    return 0;
}