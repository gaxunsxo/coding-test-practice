int main()
{
    int t;//num of test cases
    scanf("%d", &t);

    int a, b;

    for(int i=0; i<t; i++){
        scanf("%d %d\n", &a, &b);
        printf("Case #%d: %d + %d = %d\n", i+1, a, b, a+b);
    }

    return 0;
}