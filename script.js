var names=new Array();
names[0]="Michael Townley";
names[1]="Johnny In My Head";
names[2]="James Pumphrey";
names[3]="Json Vorheez";
names[4]="trevor phllips";
names[5]="franklin clinton";
names[6]="larry bird";
names[7]="obama";
names[8]="kachika";
names[9]="jim halpert";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
