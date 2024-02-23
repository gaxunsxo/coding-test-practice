#include <stdio.h>
#include <stdlib.h>

//1018
int board[51][51];
/*
black = 0
white = 1
*/

int check(int x, int y);
int min(int x, int y);
int main(void)
{
    int N, M;
    scanf("%d %d", &N, &M);

    int draw_min = 2500; //최솟값: 다시 칠해야 하는 블럭의 수
    char c;

    //1. 보드판 입력받기
    for(int i=0; i<N; i++){
        for(int j=0; j<M; j++){
            scanf(" %c", &c);
            if(c == 'B') board[i][j] = 0;
            else board[i][j] = 1;
        }
    }

    //2. check(x, y) 함수에 탐색을 시작할 인덱스 전달
    for(int i=0; i < N-7; i++){
        for(int j=0; j < M-7; j++){
            if(draw_min > check(i, j))
                draw_min = check(i, j);
        }
    }

    printf("%d", draw_min);

    return 0;
}

//3. 다시 칠해야 하는 블럭의 개수 계산
/*체스판 배열에 인덱스를 부여할 경우:
(0, 0) / (0, 1) / ...
짝 / 홀이 번갈아가며 나옴
*/
int check(int x, int y)
{
    int count1 = 0;
    int count2 = 0;

    for(int i = x; i < x + 8; i++){
        for(int j = y; j < y + 8; j++){
            if((i+j)%2 == board[i][j])
                count1++; //탐색을 시작하는 블록이 흰색일 경우
            if((i+j+1)%2 == board[i][j])
                count2++; //탐색을 시작하는 블록이 검은색일 경우
        }
    }

    return min(count1, count2);
}

int min(int x, int y)
{
    if(x >= y)
        return y;
    else
        return x;
}

