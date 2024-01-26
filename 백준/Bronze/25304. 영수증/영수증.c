int main()
{
    int x; //receipt
    scanf("%d", &x);
    
    int n; //num of products
    scanf("%d", &n);
    
    int a, b; //a: price, b: num
    int sum = 0;
    
    for(int i=0; i<n; i++){
        scanf("%d %d", &a, &b);
        sum += a*b;
    }
    
    if(x == sum)
        printf("Yes");
    else
        printf("No");
    
    
    return 0;
}