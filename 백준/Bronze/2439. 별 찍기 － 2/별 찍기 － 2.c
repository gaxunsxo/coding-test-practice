int main()
{
    int n;
    scanf("%d", &n);

    for(int i=0; i<n; i++){
         // 수정된 부분: 각 행마다 정확한 공백 개수 계산
        for(int k=0; k<n-i-1; k++){
            printf(" ");
        }
        for(int j=0; j<=i; j++){
            printf("*");
        }
        printf("\n");
    }

    return 0;
}