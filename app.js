// the names needed to be generated
// these are the firstNames
var firstName = ["ogunsola" , "bakare" , "ontedieke" , "carriao" ,"terrai" ,"fellix" , "remy" ,"palley" , 
                  "lokhander" , "white", "gray" , "brown" ,"green" , "taraji"
                   ,"mubarak" ,"obama", "trump" ,"felipe", "barrientos" ,"khalid", "amin" ,"farouq",
                   "shamwil", "tariq" ,"jamal", "hakeem" ,"ridwan", "habeeb" ,"mardiyyah" ,"aisha",
                    "saqeenah", "wasilah" ];
// These are the lastnames
var lastName= ["maraj", "Gary" , "malcolm" ,"malfroy" ,"kareem" ,"faisal" , "nabeel",
               "maurice"  , "joyner" ,  "aubrey" , "graham" , "duckworth" , "sybil" , 
               "sylmore","sylvester" , "stallone"  , "arnold" ,"hazard" ,"abraham", 
               "muhammed", "abdelaziz"];
                  
// this section is for the random pickings of names from both the firstnames and the lastnames
function getName(){
   var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
     return randomName;
}
// this section is the click event of the button to generate the name
function nameQty(){
   var userQty = document.querySelector('.qty').value;
   document.querySelector('.nameList').innerHTML = ''; 
   // this section is for when the user inputs a value more than what is expected ,in this code , the maximum name to be generated is 10
   // it brings another text to remind you that you have tried to generate more than 10 names
   if (userQty > 10){
      document.querySelector('.nameList').innerHTML = "only 10 names are allowed";
   }
   else{
      for (var i = 0;i < userQty; i++ ){
         document.querySelector('.nameList').innerHTML += getName() + '<br>';
      }
   }
}