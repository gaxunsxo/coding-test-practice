#include <stdio.h>
#include <stdlib.h>

#include <string.h>

int main(void)
{
    //특정 구분자를 기준으로 문자열 분할
    char str[1000001];

    //scanf("%s", str)은 공백을 기준으로 문자열을 입력 받으므로 적절하지 못하다.
    //공백을 포함한 문자열을 받으려면 fgets()를 사용해야 한다.
    fgets(str, sizeof(str), stdin);

    //공백(" ")은 구분자로 사용하여 문자열 분할
    char* token = strtok(str, " ");

    int count = 0; //단어의 개수

    while(token != NULL){
        if(strcmp(token, "\n") != 0 && strcmp(token, " ") != 0 && strcmp(token, "\t") != 0)
            count++;
        token = strtok(NULL, " "); //다음 분할 위치로 이동
    }

    printf("%d", count);

    return 0;
}