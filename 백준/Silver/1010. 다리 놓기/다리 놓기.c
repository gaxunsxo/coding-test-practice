#include <stdio.h>
#include <stdlib.h>

//1010
//dp를 이용한 풀이도 해보기
#include <stdbool.h>

int main(void)
{
    int T; //테스트 케이스의 개수
    scanf("%d", &T);

    while(T--){
            int N, M;
            scanf("%d %d", &N, &M);

            int result = 1, tmp = 1;

            //nCm 조합 공식
            for(int i = M; i > M-N; i--){
                result *= i;
                result /= tmp++;
            }
            printf("%d\n", result);
    }

    return 0;
}
