const int N = 1001;

int main()
{
    int T; //num of test cases
    scanf("%d", &T);

    char arr[T][N];

    for(int i=0; i<T; i++){
        scanf("%s\n", arr[i]);
    }

    for(int j=0; j<T; j++){
        int n = strlen(arr[j]);
        printf("%c%c\n", arr[j][0], arr[j][n-1]);
    }

    return 0;
}
