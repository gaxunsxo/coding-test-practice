// 다른 사람 풀이
void swap(int *a, int *b){
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
int main()
{
    int n, m;
    scanf("%d %d\n", &n, &m);

    int arr[n+1]; //배열 크기 항상 확인!

    for(int i=0 ;i<=n; i++){
        arr[i] = i;
    }

    int i, j;
    while(m--){ //for문 말고 이런 방법이 있군
        scanf("%d %d", &i, &j);

        for(int x = 0; x <= (j-i)/2; x++){
            swap(&arr[i+x], &arr[j-x]);
        }
    }

    for(int i=1; i<=n; i++){
        printf("%d ", arr[i]);
    }

    return 0;
}
