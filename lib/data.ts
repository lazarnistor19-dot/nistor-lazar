import { BriefcaseBusiness, Clock, Coins, EyeOff, FileText, Handshake, Heart, Home, Scale, ShieldCheck, Users, WalletCards } from "lucide-react";
export const navItems=["Acasă","Servicii","Cum funcționează","Avantaje","Întrebări","Contact"] as const;
export const benefits=[{title:"Economisești bani",text:"Costuri predictibile și semnificativ mai mici decât un litigiu clasic.",icon:Coins},{title:"Economisești timp",text:"Soluții posibile în zile sau săptămâni, nu în ani de proceduri.",icon:Clock},{title:"Confidențialitate",text:"Discuțiile rămân private, într-un cadru sigur și profesionist.",icon:EyeOff},{title:"Control asupra soluției",text:"Părțile decid acordul final, nu un terț impus de procedură.",icon:ShieldCheck}];
export const services=["Conflicte familiale","Program de vizită copii","Pensie de întreținere","Succesiuni","Partaj","Recuperare creanțe","Conflicte comerciale","Contracte","Conflicte de muncă","Vecini","Asociații","Alte litigii civile"];
export const serviceIcons=[Heart,Users,WalletCards,FileText,Home,Coins,BriefcaseBusiness,Handshake,Scale,Home,Users,FileText];
export const steps=["Solicitare","Invitația părților","Ședință de mediere","Acord final"];
export const comparison=[ ["Durată","Zile / săptămâni","Luni / ani"],["Cost","Predictibil și redus","Taxe, onorarii, expertize"],["Confidențialitate","Privată","Dosar public în multe situații"],["Flexibilitate","Soluții creative","Limitată de cereri și probe"],["Control","Părțile decid","Instanța decide"],["Relații între părți","Protejate prin dialog","Adesea tensionate"] ];
export const testimonials=["Proces calm, clar și foarte profesionist.","Am ajuns la acord fără stresul unui proces.","Explicații excelente și multă discreție.","Soluție rapidă pentru un conflict comercial.","Recomand pentru abordarea umană și fermă.","A transformat o situație dificilă într-un acord corect."].map((quote,i)=>({quote,name:["A. Cebotari","M. Rusu","E. Popa","D. Balan","V. Ursu","I. Moraru"][i],role:["Client familie","Antreprenor","Client civil","Administrator","Părinte","Client partaj"][i]}));
export const faqs=[
["Ce este medierea?","O procedură voluntară prin care un mediator autorizat ajută părțile să negocieze o soluție acceptată reciproc."],
["Medierea este confidențială?","Da. Informațiile discutate în mediere sunt tratate cu discreție și nu sunt folosite ca instrument de presiune publică."],
["Cât durează o mediere?","Depinde de complexitate, dar multe situații pot fi clarificate în una sau câteva ședințe."],
["Acordul de mediere are valoare juridică?","Acordul poate fi formalizat conform legii și poate produce efecte juridice în condițiile aplicabile."],
["Pot solicita mediere dacă există deja un proces?","Da, medierea poate fi utilă și când litigiul este deja pe rol, pentru reducerea costurilor și timpului."],
["Ce se întâmplă dacă cealaltă parte refuză?","Mediatorul poate transmite invitația, iar decizia de participare rămâne voluntară."],
["Este potrivită pentru companii?","Da, mai ales în contracte, creanțe, conflicte comerciale sau relații de muncă."],
["Trebuie să vin cu avocat?","Nu este obligatoriu, dar puteți fi asistat de avocat dacă doriți."],
["Cum se stabilește costul?","Costul este comunicat transparent în funcție de tipul conflictului, numărul părților și complexitate."],
["Pot programa online?","Da, formularul de contact permite solicitarea unei consultații sau invitații la mediere."]];
