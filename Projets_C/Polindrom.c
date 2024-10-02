#include <stdio.h>
#include <conio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char chaine[100],chaine_n[100];
    printf(" Tapez votre chaine : ");
    scanf("%s",&chaine);
    strcpy(chaine_n,strrev(chaine));   
       if (strcmp(chaine,strrev(chaine_n))==0){
                  printf("\n\n   Mots est polidrom !!!!!");
                  }
                  else{
                  printf("\n\n   Mots n' est pas polidrom !!!!!");
                  }
  getch();
}
