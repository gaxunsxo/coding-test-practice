int main()
{
    //long int: 4byte
    //long long int: 8byte
    //long long long int: 12byte ...

    int n;
    scanf("%d", &n);

    int k = n / 4;
    for(int i=0; i<k; i++){
        printf("long ");
    }
    printf("int");

    return 0;
}