int main()
{
    int N; //숫자의 개수
    scanf("%d", &N);

    int sum = 0;
    for(int i=0; i<N; i++){
        char digit; //한 자리의 숫자를 읽어들일 변수
        scanf(" %c", &digit); //%c를 사용하여 공백 없이 입력된 숫자를 읽어들임
        sum += (digit - '0'); //아스키 코드를 이용하여 숫자로 변환 후 합산
    }

    printf("%d", sum);

    return 0;
}
