int main()
{
    int T; //테스트 케이스의 개수
    scanf("%d", &T);

    int R[T]; //반복 횟수
    char S[T][21];

    for(int i=0; i<T; i++){
        scanf("%d ", &R[i]);
        scanf("%s", S[i]);
    }

    for(int i=0; i<T; i++){
        for(int j=0; S[i][j] != '\0'; j++){
            for(int k=0; k<R[i]; k++){
                printf("%c", S[i][j]);
            }
        }
        printf("\n");
    }

    return 0;
}
