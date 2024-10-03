#include <stdio.h>
#include <conio.h>

int main(int argc, char *argv[])
{
    int n,i,j;
  printf ("Donnez le nombre de ligne n= ");
  scanf ("%d",&n);
  for (i=1;i<=n;i++){
      for (j=1;j<=i;j++){
         printf("%d\ ",j); }
           printf ("\n");
          }
          int nn,ii,jj;
  printf ("Donnez le nombre de ligne n= ");
  scanf ("%d",&nn);
  for (ii=1;ii<=nn;ii++){
      for (jj=1;jj<=ii;jj++){
         putchar('X'); }
           printf ("\n");
          }
  getch();
}
