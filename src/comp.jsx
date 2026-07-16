import Card from './FirstPage/Card.jsx'
import Nav from './FirstPage/nav.jsx'


import './App.css'
const moviesData = [
  {
    id: "solo-leveling-reawakening",
    title: "Solo Leveling: ReAwakening",
    year: 2024,
    genre: "Action / Fantasy",
    language: "Hindi Dubbed",
    rating: "⭐ 9.2/10",
    shortDesc: "Sabse kamzor hunter se duniya ka sabse taakatwar banne ki kahani.",
    fullDesc: "Yeh kahani hai ek aisi duniya ki jahan achanak se insano aur monsters ke beech jang shuru ho jati hai. Hamara main character 'Song Jin-Woo' jo kabhi puri duniya ka sabse kamzor hunter hua karta tha, ek rahasyamayi ghatna ke baad use ek 'system' milta hai. Ab woh kaise duniya ka sabse khatarnak aur taakatwar Shadow Monarch banta hai, yehi is movie mein dikhaya gaya hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/igris.jpg",
    screenshots: ["img/solo1.jpg", "img/solo2.jpg", "img/solo3.jpg", "img/solo4.jpg", "img/solo5.jpg"],
    downloadLink: "img/s.mp4"
    
  },
  {
    id: "one-piece-film-red",
    title: "One Piece Film: Red",
    year: 2022,
    genre: "Action / Adventure / Musical",
    language: "Hindi Dubbed",
    rating: "⭐ 8.9/10",
    shortDesc: "Luffy aur uski crew ka ek aur shaandar musical adventure.",
    fullDesc: "Duniya ki sabse chaheti singer 'Uta' pehli baar live concert karne ja rahi hai. Lekin jab Luffy aur Straw Hat crew wahan pahunchte hain, toh pata chalta hai ki Uta asal mein Luffy ki bachpan ki dost aur mahaan pirate Red-Haired Shanks ki beti hai! Yahan se shuru hota hai ek naya adventure.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/onepiece.jpg",
    screenshots: ["img/op1.jpg", "img/op2.jpg", "img/op3.jpg", "img/op4.jpg"],
    downloadLink: "img/op.mp4"
    
  },
  {
    id: "jujutsu-kaisen-0",
    title: "Jujutsu Kaisen 0",
    year: 2021,
    genre: "Action / Dark Fantasy",
    language: "Hindi Dubbed",
    rating: "⭐ 9.0/10",
    shortDesc: "Yuta Okkotsu aur khatarnak curse ke beech ki jang.",
    fullDesc: "Yuta Okkotsu ek high school student hai jo ek behad shaktishali aur khatarnak curse se pareshan hai. Gojo Sensei use Jujutsu High School mein lata hai taaki woh apni is shakti ko control karna seekh sake aur evil sorcerers ka samna kar sake.",
    posterUrl:"https://raw.githubusercontent.com/Shivam-018-hub/photos/main/jjk.jpg",

    screenshots: ["img/jjk1.jpg", "img/jjk2.jpg", "img/jjk3.jpg"],
    downloadLink: "img/jjk.mp4"
    
  },
  {
    id: "demon-slayer-mugen-train",
    title: "Demon Slayer: Mugen Train",
    year: 2020,
    genre: "Action / Shounen",
    language: "Hindi Dubbed",
    rating: "⭐ 9.1/10",
    shortDesc: "Tanjiro aur Rengoku ka train ke andar shaitano se mukabla.",
    fullDesc: "Tanjiro, Nezuko, Zenitsu aur Inosuke ek naye mission par nikalte hain jahan unhe Flame Hashira Kyojuro Rengoku ke sath milkar ek mysterious train ke andar logon ko gayab karne wale shaitano (Enmu) ka shikar karna hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/demonlayer.jpg",
    screenshots: ["img/ds1.jpg", "img/ds2.jpg", "img/ds3.jpg"],
    downloadLink: "img/ds.mp4"
    
  },
  {
    id: "naruto-the-last",
    title: "The Last: Naruto the Movie",
    year: 2014,
    genre: "Action / Romance",
    language: "Hindi Dubbed",
    rating: "⭐ 8.6/10",
    shortDesc: "Naruto aur Hinata ki prem kahani aur chand se aayi aafat.",
    fullDesc: "Fourth Shinobi World War ke do saal baad, Toneri Otsutsuki chand ko dharti par girane ki saazish rachta hai aur Hanabi ko kidnap kar leta है। Naruto aur uske dost use bachane nikalte hain, jahan Naruto ko Hinata ke sacche pyaar ka ehsaas hota hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/naruto.jpg",
    screenshots: ["img/ntl1.jpg", "img/ntl2.jpg"],
    downloadLink: "img/naruto.mp4"
   
  },
  
  {
    id: "suzume",
    title: "Suzume no Tojimari",
    year: 2022,
    genre: "Adventure / Fantasy",
    language: "Hindi Dubbed",
    rating: "⭐ 8.7/10",
    shortDesc: "Japan ko tabahi se bachane ke liye darwaze band karne ka safar.",
    fullDesc: "Suzume ek 17-saal ki ladki hai jo ek rahasyamayi ladke Sauta se milti hai. Japan ke alag-alag hisso mein achanak aafat lane wale purane darwaze khulne lagte hain. Suzume aur Sauta ko un darwazon ko band karna hoga taaki poore desh ko tabahi se bachaya ja sake.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/suzume.jpg",
    screenshots: ["img/sz1.jpg", "img/sz2.jpg"],
    downloadLink: "img/suzume.mp4"
  },
  {
    id: "dragon-ball-super-broly",
    title: "Dragon Ball Super: Broly",
    year: 2018,
    genre: "Action / Sci-Fi",
    language: "Hindi Dubbed",
    rating: "⭐ 8.8/10",
    shortDesc: "Goku aur Vegeta ka sabse taakatwar Saiyan Broly se maha-yudh.",
    fullDesc: "Tournament of Power ke baad, Goku aur Vegeta ka samna ek naye Saiyan 'Broly' se hota hai jise Frieza lekar aaya hai. Broly ke paas aisi anant shakti hai jo unhone pehle kabhi nahi dekhi. Ek behad khatarnak jang shuru hoti hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/Dragon.jpg",
    screenshots: ["img/broly1.jpg", "img/broly2.jpg"],
    downloadLink: "img/dbs.mp4"
  },
  {
    id: "your-name",
    title: "Your Name",
    year: 2016,
    genre: "Romance / Fantasy / Drama",
    language: "Hindi Dubbed",
    rating: "⭐ 8.9/10",
    shortDesc: "Do anjaano ki kahani jinki body achanak aapas mein badal jati hai.",
    fullDesc: "Mitsuha gaon mein rehne wali ek ladki hai aur Taki Tokyo ka ek ladka. Achanak dono ki bodies aapas mein exchange hone lagti hain sapno ke zariye. Jab dono ek dusre ko dhoondhne ki koshish karte hain, toh ek bada rahasya saamne aata hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/yourname.jpg",
    screenshots: ["img/yn1.jpg", "img/yn2.jpg"],
    downloadLink: "img/yn.mp4"
  },
  {
    id: "silent-voice",
    title: "A Silent Voice",
    year: 2016,
    genre: "Drama / Emotional",
    language: "Hindi Dubbed",
    rating: "⭐ 8.7/10",
    shortDesc: "Galti sudharne aur dosti ki ek behad emotional kahani.",
    fullDesc: "Shoya naam ka ek ladka bachpan mein ek behri ladki Shoko ko bohot pareshan karta hai. Bada hokar, Shoya ko apni galti ka ehsaas hota hai aur woh samaj se alag-alag ho jata hai. Woh Shoko se dubara milkar apni purani galtiyon ki maafi mangne ka faisla karta hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/SilentVoice.jpg",
    screenshots: ["img/asv1.jpg", "img/asv2.jpg"],
    downloadLink: "img/asv.mp4"
  },
  {
    id: "my-hero-academia-world-heroes-mission",
    title: "MHA: World Heroes' Mission",
    year: 2021,
    genre: "Action / Superhero",
    language: "Hindi Dubbed",
    rating: "⭐ 8.4/10",
    shortDesc: "Deku, Bakugo aur Todoroki ka poori duniya ko bachane ka mission.",
    fullDesc: "Ek evil organization poori duniya se quirks (shaktiyon) ko khatam karne ke liye bomb plant karti hai. Deku aur uske dosto ko pure world ke heroes ke sath milkar 2 ghante ke andar un bombs ko dhoondhna aur duniya ko bachana hai.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/heroacademia.jpg",
    screenshots: ["img/mha1.jpg", "img/mha2.jpg"],
    downloadLink: "img/mha.mp4"
  },
  {
    id: "black-clover-sword-of-the-wizard-king",
    title: "Black Clover: Sword of the Wizard King",
    year: 2023,
    genre: "Action / Fantasy",
    language: "Hindi Dubbed",
    rating: "⭐ 8.5/10",
    shortDesc: "Asta ka Clover Kingdom ke purane Wizard Kings se mukabla.",
    fullDesc: "Clover Kingdom ke 4 purane aur sabse taakatwar Wizard Kings dubara zinda ho jate hain aur kingdom ko tabah karne nikalte hain. Bina magic wale Asta aur uske dosto ko milkar Clover Kingdom ko is maha-sankat se bachana hoga.",
    posterUrl: "https://raw.githubusercontent.com/Shivam-018-hub/photos/main/Blackclover.jpg",
    screenshots: ["img/bc1.jpg", "img/bc2.jpg"],
    downloadLink: "img/bc.mp4"
  }
];



function Comp() {
 
  
  return (
    
    <>

      <Nav/>
      <main className="main-container">
           
        <div className="movie-grid">
      { moviesData.map( (elem)=>{
        return(
      <Card 
      elem={elem}
      key={elem.id}
      />)})}
      </div>
      </main>
    </>
  )
}

export default Comp;
