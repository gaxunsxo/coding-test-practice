int reverse_number(int n);
int main()
{
    int a, b;
    scanf("%d %d", &a, &b);

    if(reverse_number(a) > reverse_number(b))
        printf("%d", reverse_number(a));
    else
        printf("%d", reverse_number(b));

    return 0;
}

int reverse_number(int n)
{
    int reversed_num = 0;
    while(n != 0){
        int digit = n % 10;
        reversed_num = reversed_num * 10 + digit;
        n /= 10;
    }
    return reversed_num;
}
