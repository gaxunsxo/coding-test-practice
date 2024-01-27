int main()
{
    int n;
    scanf("%d", &n);

    int a[n];

    for(int i=0; i<n; i++){
        scanf("%d", &a[i]);
    }
    getchar();

    int count = 0;
    int v;
    scanf("%d", &v);

    for(int j=0; j<n; j++){
        if(a[j] == v)
            count++;
    }

    printf("%d", count);

    return 0;
}