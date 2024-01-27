int main()
{
    int n, m;
    scanf("%d %d\n", &n, &m);

    int a[n];
    int i, j, k;

    for(int i=0; i<n; i++)
        a[i] = 0;

    for(int x=0; x<m; x++){
        scanf("%d %d %d\n", &i, &j, &k);
        for(int y=i-1; y<=j-1; y++){
            a[y] = k;
        }
    }

    for(int i=0; i<n; i++)
        printf("%d ", a[i]);

    return 0;
}