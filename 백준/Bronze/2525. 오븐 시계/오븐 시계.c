int main()
{
    int a, b; // a시 b분
    int c; // time for cooking
    
    scanf("%d %d\n", &a, &b);
    scanf("%d", &c);
    
   if((b + c) < 60) {
        printf("%d %d", a, b+c);
   }
   else{
        int h = (b + c) / 60; // 더해질 시간
        int m = (b + c) % 60;
        if((h + a) > 23){
            printf("%d %d", (h+a-24), m);
        } 
        else{
            printf("%d %d", h+a, m);
        }
   }
    
    return 0;
}
