const int N = 101;

int main()
{
    char arr[N];

    scanf("%s", arr);

    int n;
    n = strlen(arr);

    //strlen: NULL문자를 제외한 문자열의 길이
    //sizeof: 선언된 변수의 크기, 배열의 경우 배열의 전체 크기

    printf("%d", n);

    return 0;
}
