// 다른 사람 코드 

#define arr_size 42
#define count_size 10

int main()
{
    int i, num; // 반복변수와 입력값 
    int count = 0; // 숫자 카운트 
    int arr[arr_size] = {0, }; //나머지 비교 배열 

    // 각 나머지 값 카운트 
    for(i=0; i<count_size; i++){
        scanf("%d", &num);
        arr[num % 42] += 1; // 42로 나누었을 때 생기는 나머지 범위: 0~41
    }
    
    // 총 서로 다른 나머지 계산 
    for(i=0; i<arr_size; i++){
        if(arr[i] >= 1) // 중복 있음
            count++;
    }
    
    printf("%d", count);
    
    return 0;
}
