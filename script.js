var names=new Array();
names[0]="Jacob";
names[1]="JohnnyBoy";
names[2]="JennaMarbles";
names[3]="JsonVorheez";
names[4]="pawl";
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
