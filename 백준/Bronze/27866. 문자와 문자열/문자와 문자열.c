const int N = 1001;

int main()
{
    char arr[N];

    scanf("%s", arr); 
    //%s: 공백 문자를 기준으로 문자열을 나눠 입력받음
    //따라서 이 문제에서는 조건을 나눠 입력을 받을 필요가 없었음!

    int n;
    scanf("%d", &n);

    printf("%c", arr[n-1]);

    return 0;
}
