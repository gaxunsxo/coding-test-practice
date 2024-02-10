int main()
{
    char S[100];
    scanf("%s", S);

    int position[26];

    // -1로 초기화
    for(int i=0; i<26; i++){
        position[i] = -1;
    }

    for(int j=0; j<strlen(S); j++){
        char alphabet = S[j];

        if(position[alphabet - 'a'] == -1)
            position[alphabet - 'a'] = j;
        else
            continue;
    }

    for(int k=0; k<26; k++){
        printf("%d ", position[k]);
    }
}
