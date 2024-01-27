int main()
{
    int n;
    scanf("%d", &n);

    int x;
    scanf("%d", &x);
    
    int a[n];
    for(int i=0; i<n; i++){
        scanf("%d", &a[i]);
        if(a[i] < x)
            printf("%d ", a[i]);
    }
    
    return 0;
}
