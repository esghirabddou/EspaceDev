#include <stdio.h>
#include <conio.h>

int main(int argc, char *argv[])
{int n,t=0,k=0,f,i;
puts("Donner le nombre des elements");
scanf("%d",&f);
for (i=1;i<=f;i++){
printf ("\nDonner un nombre : ");
             scanf("%d",&n);
          if (n%2==0) {
                      t=t+1;
                      }
                      else if (n%2!=0){
                           k=k+1; }
                           } 
printf("\nle nombre des elements Impaire est: %d\n",k);
printf("\nle nombre des elements Paire est: %d\n",t);
  getch();
}



        
             
                         
                          
