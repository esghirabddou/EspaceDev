#include <stdio.h>
#include <conio.h>

int main(int argc, char *argv[])
{int n,t=0,k=0;
  do{
             printf ("\nDonner un nombre : ");
             scanf("%d",&n);
             if (n<0) {
                      t=t+1;
                      }
                      else if (n>0){
                           k=k+1;
                           }} 
                           while(n!=0);
printf("\nle nombre des elements positives est: %d\n",k);
printf("\nle nombre des elements negatives est: %d\n",t);
  getch();
}
