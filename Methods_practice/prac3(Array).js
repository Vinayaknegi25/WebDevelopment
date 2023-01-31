var s1= "I am really hungry for some ";
var foods=['Pizza','Pasta','Burgers','Chaat','Eggs'];

let i;
for(i=0;i<foods.length;i++)
{
    console.log(`${s1}${foods[i]}`);
}


for(i=0;i<foods.length;i++)
{
    if(i%2==0){
        foods[i] = foods[i].toLocaleUpperCase();
    }
    else{
        foods[i] = foods[i].toLowerCase();
    }
}
console.log(foods);