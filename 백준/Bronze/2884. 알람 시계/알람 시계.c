int main()
{
    int h, m; //h시 m분
    
    scanf("%d %d", &h, &m);

    //not use 0
    //(h*60 + m - 45)
    
    //fail. => 기준: 45분
    if(m >= 45){
        printf("%d %d", h, m-45);
    }
    else{
        if(h > 0){
            printf("%d %d", h-1, m+15);
        }
        else{
            printf("%d %d", 23, m+15);
        }
    }
    return 0;
}
