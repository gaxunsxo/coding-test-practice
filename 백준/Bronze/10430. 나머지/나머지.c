int main()
{
//정수: d, 실수: f, 나누기 나머지 연산자 헷갈리지 말기...

    int a, b, c;

    scanf("%d %d %d", &a, &b, &c);

    printf("%d\n", (a+b)%c);
    printf("%d\n", ((a%c) + (b%c))%c);
    printf("%d\n", (a*b)%c);
    printf("%d\n", ((a%c) * (b%c))%c);

    return 0;
}