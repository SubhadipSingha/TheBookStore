 
const details =[
    
  {
    id: 1,
    name: "The Lord of the Rings",
    text: "Hobbits fight to destroy evil ring in Middle-earth. ",
    src: "https://m.media-amazon.com/images/I/71VjmMcE-rL._AC_UF1000,1000_QL80_.jpg",
    price: 950.00 ,
    category: "Fantasy",
  },
  {
    id: 2,
    name: "Pride and Prejudice",
    text: "Elizabeth Bennet navigates love, marriage, and class in 19th-century England.",
    src: "https://m.media-amazon.com/images/I/91eKRbuhgaL._AC_UF1000,1000_QL80_.jpg",
    price: 129.00 ,
    category: "Romance" },
    { 
     id: 3,
    name: "To Kill a Mockingbird", 
    text: "Scout Finch witnesses racial injustice in Depression-era Alabama",
     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqb_AL26HzVJJk1TuAVFqS8g7tP9czEn5IzVVO0XGCBQ&s",
     price:801.00 ,
     category: "Fantasy",
   },
  {
     id: 4,
     name: "Harry Potter and the Sorcerer's Stone", 
     text: "Orphaned Harry Potter discovers magic on his 11th birthday and attends Hogwarts wizard school", 
     src: "https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg",
     price: 2231,
     category: "Fantasy",
  },
    {
       id: 5,
       name: "The Hitchhiker's Guide to the Galaxy", 
       text: "Absurd sci-fi comedy about a man, space travel.", 
      src: "https://m.media-amazon.com/images/I/71OPafHmyQL._AC_UF1000,1000_QL80_.jpg",
       price: 280 ,
       category: "Science Fiction",
    },
  {
   id: 6,
     name:"A Court of Thorns and Roses",
      text:"first book in the GLOBALLY BESTSELLING ACOTAR series",
       src:"https://books.google.co.in/books/publisher/content?id=VswAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73WvTykRdH60q6saeQfBfh5qAT4VTdNbbjBLyGWwfBg9qUGmdRlXQKBuCeYMBPFw_ZqzYlnyPj5SFBpteBZ_4wZp8lbUEE0hkRfmOuOqVBRjhSntDzAelrf5OUCUFP7xDXrJ7Js",
        price: 530 ,
        category: "Fantasy"
   },
   {
     id: 7,
      name:"The Women: A Novel",
     text:"Kristin Hannah's The Women: Wartime coming-of-age meets a divided nation.",
       src:"https://books.google.co.in/books/content?id=EDQb0AEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70pV05RdTn-UiIrLNr83bspsNqrg8ldxSn3QM0Qg7Ii7_CfcBQTqdoZqdMJWlmWOqRXFq2E3wJo2fPsdCwxi6K3uhP_bjJT6V7df0PsWl67QqyU68oAi5H-GNxgnTmNC78uE2Q-",
      price:667 ,
      category: "Historical Fiction"
     },
  
  {
    id: 8,
    name: "The Song of Achilles",
    text: "The Song of Achilles is a 2011 novel by American writer Madeline Miller.",
    src: "https://upload.wikimedia.org/wikipedia/en/1/1e/TheSongofAchilles.png",
    price: 1729,
    category: "Mythology" 
  },
         
               {
                 id: 9,
                 name: "Jane Eyre",
                 text: "Orphan Jane finds love and independence.",
                 src: "https://m.media-amazon.com/images/I/81pwJjgcwwL._AC_UF1000,1000_QL80_.jpg", 
                 category: "Classic",
                 price:1642.00 ,
               },
               {
                 id: 10,
                 name: "The Great Gatsby",
                 text: "Jay Gatsby's opulent life hides a dark secret.",
                 src: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Great Gatsby cover image
                 category: "Fiction",
                 price:1141.00 ,
               },
               {
                 id: 11,
                 name: "One Hundred Years of Solitude",
                 text: "Generations of a family's rise and fall.",
                 src: "https://m.media-amazon.com/images/I/714ZLzX852L._AC_UF1000,1000_QL80_.jpg", // Replace with link to One Hundred Years of Solitude cover image
                 category: "Magical Realism",
                 price :290.00 ,
               },
               {
                 id: 12,
                 name: "The Catcher in the Rye",
                 text: "Angsty Holden Caulfield navigates NYC.",
                 src: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Catcher in the Rye cover image
                 category: "Coming-of-Age",
                 price:679.00 ,
               },
               {
                 id: 13,
                 name: "Frankenstein",
                 text: "Scientist creates a monstrous being.",
                 src: "https://m.media-amazon.com/images/I/81EU992zdwL._AC_UF1000,1000_QL80_.jpg", // Replace with link to Frankenstein cover image
                 category: "Gothic Fiction",
                 price:649.00,
               },
               {
                 id: 14,
                 name: "Beloved",
                 text: "Haunted by a chilling past.",
                 src: "https://m.media-amazon.com/images/I/71qZg5ZEhpL._AC_UF1000,1000_QL80_.jpg", // Replace with link to Beloved cover image
                 category: "Historical Fiction",
                 price:360.00,
               },
               {
                 id: 15,
                 name: "1984",
                 text: "Dystopian future with Big Brother control.",
                 src: "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg", // Replace with link to 1984 cover image
                 category: "Dystopian",
                 price:278.00,
               },
               {
                 id: 16,
                 name: "To the Lighthouse",
                 text: "Family vacation reveals unspoken emotions.",
                 src: "https://miro.medium.com/v2/resize:fit:1080/1*Z5KLQbybGAxlM5JdjOWeWw.jpeg", // Replace with link to To the Lighthouse cover image
                 category: "Literary Fiction",
                 price:651.00 ,
               },
               {
                 id: 17,
                 name: "The Lord of the Flies",
                 text: "Boys stranded on island descend into chaos.",
                 src: "https://m.media-amazon.com/images/I/517Hf-iPmnL.jpg", // Replace with link to The Lord of the Flies cover image
                 category: "Adventure",
                 price:599.00 ,
               },
                  {
                    id: 18,
                    name: "Wuthering Heights",
                    text: "Love and revenge on the Yorkshire moors.",
                    src: "https://m.media-amazon.com/images/I/81cUdSqjrGL._AC_UF1000,1000_QL80_.jpg", 
                    category: "Gothic Fiction",
                    price:312.00,
                  },
                  {
                    id: 19,
                    name: "The Adventures of Huckleberry Finn ",
                    text: "Huck Finn's journey down the Mississippi.",
                    src: "https://m.media-amazon.com/images/I/91Suc5Kql8L._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Adventures of Huckleberry Finn cover image
                    category: "Adventure",
                    price:482.00,
                  },
                  {
                    id: 20,
                    name: "Invisible Man",
                    text: "Racial struggles of an African American man.",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXABlNvTVe4973lnPz2tXwh5WO-Q9yKrCG6Jx8qA8_A&s", // Replace with link to Invisible Man cover image
                    category: "Coming-of-Age",
                    price:79.00 ,
                  },
                  {
                    id: 21,
                    name: "The Handmaid's Tale",
                    text: "Dystopian future with oppressed women.",
                    src: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Handmaid's Tale cover image
                    category: "Dystopian",
                    price:539.00 ,
                  },
                  {
                    id: 22,
                    name: "Things Fall Apart",
                    text: "Colonization disrupts a Nigerian village.",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMd5T6cyQImFC5pbhaMSOmNjgYBv0b31Lo2EZINOOGg&s", // Replace with link to Things Fall Apart cover image
                    category: "Historical Fiction",
                    price:286.00 ,

                  },
                  {
                    id: 23,
                    name: "The Book Thief",
                    text: "Girl survives WWII in Nazi Germany.",
                    src: "https://m.media-amazon.com/images/I/71H52+sSb4L._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Book Thief cover image
                    category: "Historical Fiction",
                    price:152.00 ,
                  },
                  {
                    id: 24,
                    name: "Moby Dick",
                    text: "Captain Ahab's obsessive hunt for a whale.",
                    src: "https://m.media-amazon.com/images/I/41RVtE3JJIL.jpg", // Replace with link to Moby Dick cover image
                    category: "Adventure",
                    price:249.00 ,
                  },
                  {
                    id: 25,
                    name: "The Metamorphosis",
                    text: "Man transforms into a giant insect.",
                    src: "https://m.media-amazon.com/images/I/81XLJH8QOeL._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Metamorphosis cover image
                    category: "Fiction",
                    price:109.00 ,
                  },
                  {
                    id: 26,
                    name: "The Adventures of Sherlock Holmes",
                    text: "Detective solves crimes in Victorian London.",
                    src: "https://m.media-amazon.com/images/I/71-YShuOLdL._AC_UF1000,1000_QL80_.jpg", // Replace with link to The Adventures of Sherlock Holmes cover image
                    category: "Mystery",
                    price: 349.00 ,
                  },
                  {
                    id: 27,
                    name: "The Count of Monte Cristo",
                    text: "Man escapes imprisonment, seeks revenge.",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSe-NpLBpd8jE0zO8grN3Shk1u_So2gSMo9AoE51UoDQ&s",
                    price:  399.00 ,
                    category: "Adventure",
                  },
                    {
                     id: 28,
                     name: "The Three Musketeers",
                     text: "Swashbuckling adventures in 17th-century France.",
                     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeo3lq5g8osaVWQ5V8ZJa3Wt62fNTfAgGmvGqrBoLpg&s",
                     category: "Adventure",
                     price: 255.00,
                   },
                   
                
             ];
             
 export default details;      
