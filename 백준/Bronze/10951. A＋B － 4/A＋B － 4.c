#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a, b;

    while(1){
        // EOF? 틀려서 다른 사람 풀이 봄.
        if(scanf("%d %d", &a, &b) == EOF){
            break;
        }
        else
            printf("%d\n", a+b);
    }

    return 0;
}
