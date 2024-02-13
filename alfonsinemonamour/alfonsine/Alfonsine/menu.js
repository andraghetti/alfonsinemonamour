gauche5=12;
haut5= 10;
target5 = '_self';

color51 = "#d3d3d3"; 
color52 = "#f0f0f0";
color53 = "#000000";

menu5titre = new Array;
menu5lien = new Array;

	menu5titre[0]= 'Alfonsine'
	menu5lien[0]= 'alfonsine.htm'
	menu5titre[1]= 'Cenni geografici'
	menu5lien[1]= 'dove.htm'	
	menu5titre[2]= 'Cenni storici'
	menu5lien[2]= 'cennistorici.htm'	
	menu5titre[3]= 'Personaggi alfonsinesi'
	menu5lien[3]= 'personaggi.htm'
	menu5titre[4]= 'Famiglie del Novecento'
	menu5lien[4]= 'famiglie.htm'
	menu5titre[5]= 'Alfonsine nel Novecento'
	menu5lien[5]= 'foto-alfonsine vecchia.htm'
	menu5titre[6]= 'Alfonsine mon amour'
	menu5lien[6]= 'mon-amour.htm'
	menu5titre[7]= 'Archivio fotografico'
	menu5lien[7]= 'indice_foto.htm'
	menu5titre[8]= 'Edifici pubblici, Parchi, Sport e divertimenti'
	menu5lien[8]= 'edifici pubblici.htm'
	menu5titre[9]= 'Feste, Eventi, Chiese, Monumenti, Luoghi '
	menu5lien[9]= 'eventi.htm'
	menu5titre[10]= 'La cucina, Ristoranti, Alberghi, Agriturismo, B&B'
	menu5lien[10]= 'ristorazione.htm'
	menu5titre[11]= 'Industria, Commercio, Aziende agricole'
	menu5lien[11]= 'attivita_produttive.htm'
	menu5titre[12]= 'Contact'
	menu5lien[12]= 'mailto:lucci@racine.ra.it'


document.write('<STYLE TYPE="text/css">#menu5 { position:absolute;top:'+haut5+';left:'+gauche5+'; }</STYLE>');

ie4=document.all
ns6=document.getElementById&&!document.all
ns4=document.layers

function placeMenu5() {
if (ie4) {menu5.style.pixelTop=document.body.scrollTop+haut5}
else if (ns6) {document.getElementById("menu5").style.top=window.pageYOffset+haut5}
else if (ns4) {eval(document.menu5.top=eval(window.pageYOffset+haut5));}
if(ie4 || ns6 || ns4)
	setTimeout("placeMenu5()",1);
}

window.onload = placeMenu5;
document.write('<SPAN ID=menu5><table bgcolor=#c6c6c6 border=1 cellspacing=0 cellpadding=2 bordercolorlight=#000000 bordercolordark=#c6c6c6 WIDTH=180><TR>	<TD ALIGN=center bgcolor="#006699"><FONT FACE="Arial" SIZE=1 COLOR=#ffffff><B>Menu</B></FONT></TD></TR>')
for(a=0;a<menu5lien.length;a++)
	{
	document.write('<TR><TD onMouseOut="this.style.background=\''+color51+'\'" onMouseOver="this.style.background=\''+color52+'\'" STYLE="cursor:hand" onClick="window.open(\''+menu5lien[a]+'\',\''+target5+'\')"><FONT FACE="Verdana, Arial" SIZE=1><B><A HREF="'+menu5lien[a]+'" TARGET="'+target5+'" STYLE="text-decoration:none;color:'+color53+'">'+menu5titre[a]+'</A></B></FONT></TD></TR>');
	}
document.write('</TR></TABLE></SPAN>')


