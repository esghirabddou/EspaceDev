#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    long int n,i,k=0;
    printf("Tapez un nombre SVP : ");
    scanf("%d",&n);
    if(n==0|| n==1){
            k=2;}
            else{
    for(i=1;i<=n;i++){
    if(n%i==0){
    k++;
    }}}
    if(k==2){
      printf("\nLe nombre est 1 ");
    }
    else{
      printf("\nLe nombre n'est pas 1 ");
   }  
  getch();
}
