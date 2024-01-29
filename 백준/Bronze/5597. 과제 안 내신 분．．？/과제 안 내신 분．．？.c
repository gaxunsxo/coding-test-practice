int main()
{
    // 다른 사람 코드

    int arr[31] = {0, };
    int a;

    for(int i=0; i<28; i++){
        scanf("%d\n", &a);
        arr[a] = 1; // 입력된 출석 번호는 1로 저장
    }

    for(int i=1; i<=30; i++){
        if(!arr[i])
            printf("%d \n", i); // 이미 배열 번호에 맞게 저장되어있으니까 대소 비교 필요 x
    }

    return 0;
}
