#define max(x, y) ((x) > (y) ? (x) : (y))
    
int main()
{
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    //틀려서 다른 풀이 참고함.
    
    if(a == b && b == c) //3
        printf("%d", 10000 + a*1000);
    else if(a == b || a == c) //2
        printf("%d", 1000 + a*100);
    else if(b == c) //2
        printf("%d", 1000 + b*100);
    else //0
        printf("%d", max(max(a, b), c)*100);
    

    return 0;
}