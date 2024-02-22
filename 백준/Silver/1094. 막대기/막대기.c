#include <stdio.h>
#include <stdlib.h>

//1094
//비트 마스킹

int main(void)
{
    int X; //만드려는 막대의 길이
    scanf("%d", &X);

    int count = 0;

    while(X > 0){
        if(X % 2 == 1)
            count++;
        X /= 2;
    }

    printf("%d", count);

    return 0;
}