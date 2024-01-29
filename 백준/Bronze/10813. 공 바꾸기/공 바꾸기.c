int main()
{
    int n, m;
    scanf("%d %d\n", &n, &m);

    int a[n];
    int i, j;
    int tmp;

    for(int i=0; i<n; i++)
        a[i] = i+1;

    for(int x=0; x<m; x++){
        scanf("%d %d\n", &i, &j);
        // 인덱스를 1씩 빼서 배열의 인덱스에 맞게 조정
        i--;
        j--;

        tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    for(int i=0; i<n; i++){
        printf("%d ", a[i]);
    }

    return 0;
}