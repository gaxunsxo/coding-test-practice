int main()
{
    int N;
    scanf("%d\n", &N);

    int score[N];
    int max = 0;

    for(int i=0; i<N; i++){
        scanf("%d", &score[i]);

        if(score[i] > max)
            max = score[i];
    }

    double sum = 0; //왜 double을 써야 하지 ?
    for(int i=0; i<N; i++){
        sum += ((double) score[i]/max)*100; // double!
    }

    printf("%f", (double)sum/N);

    return 0;
}
