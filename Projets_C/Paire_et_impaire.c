#include <stdio.h>
#include <conio.h>

int main(int argc, char *argv[])
{
    int n,j=0,e=0,i;
  printf("Donnez la taille de tableau : ");
  scanf ("%d",&n);
  int t[n];
  for (i=0;i<n;i++){
      printf("Tapez element N%d : ",i+1);
      scanf ("%d",&t[i]);
      if (t[i]%2==0){
                  j+=1;}
                    if(t[i]%2!=0){
                  e+=1;}  
    }
                  puts("");
              for (i=0;i<n;i++){
                  printf("%4d",t[i]);
                  } 
                   puts("");   
                  printf("\nLe nombre des nombres paire est : %d\n",j);      
                  printf("Le nombre des nombres impaire est : %d\n",e);
                  int t1[j],t2[e];
                  int l=0,c=0,k;
                   for (i=0;i<n;i++){
                       if (t[i]%2==0){
                           t1[c]=t[i];
                           c++;
                           }
                       if(t[i]%2!=0){
                         t2[l]=t[i];
                         l++;}  
    }
     puts("");
     printf ("\nLes nombres paire est :  "); 
                  for (k=0;k<j;k++){
                     printf ("%3d",t1[k]);}
    printf ("\n\nLes nombres impaire est :  "); 
                  for (k=0;k<e;k++){
                     printf ("%3d",t2[k]);}
  	
  getch();
}
