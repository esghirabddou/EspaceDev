#include <stdio.h>
#include <conio.h>

void main(void)
{
    int n,i;
    float X,p=1;
  printf ("\nDonnez un nombre X= ");
  scanf ("%f",&X);
  printf ("\nDonnez un nombre n= ");
  scanf ("%d",&n);
  if (n>0){
  for (i=0;i<n;i++)
     {
        p=X*p;
             }
      printf ("\nle resultat de la puissonce est: pow= %.0f\n",p);}
      else{
           if (n<0) {
                    n=-n;
                    for (i=0;i<n;i++)
                      {
                         p=(1/X)*p;
                           }
                   printf ("\nle resultat de la puissonce est: pow= %.2f\n",p);}
                   else{
                        printf ("\nle resultat de la puissonce est: pow= 1\n");}
                        }
              
           
    getch();
}
