int main()
{
    int a[9];

    for(int i=0; i<9; i++){
        scanf("%d\n", &a[i]);
    }

    int max = a[0];
    int n = 0;

    for(int j=0; j<9; j++){
        if(a[j] >= max){
            max = a[j];
            n = j;
        }
    }

    printf("%d\n", max);
    printf("%d\n", n+1);

    return 0;
}
