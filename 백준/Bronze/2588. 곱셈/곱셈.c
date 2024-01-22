int main()
{
    int x, y; 

    scanf("%d %d", &x, &y); // 숫자 입력 받을 때 &연산자!
 
    printf("%d\n", x*(y % 100 % 10));
    printf("%d\n", x*(y % 100 / 10));
    printf("%d\n", x*(y / 100));
    printf("%d\n", x*y);

    return 0;
}
