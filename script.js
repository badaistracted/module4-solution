var names=new Array();
names[0]="MichaelTownley";
names[1]="JohnnyInMyHead";
names[2]="JamesPumphrey";
names[3]="JsonVorheez";
names[4]="trevorphllips";
names[5]="franklinclinton";
names[6]="larrybird";
names[7]="obama";
names[8]="kachika";
names[9]="jimhalpert";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
