

let quotes= [
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "description": "Steve Jobs, the co-founder of Apple Inc., emphasizes the importance of passion in achieving remarkable accomplishments."
    },
    {
      "quote": "In three words I can sum up everything I've learned about life: it goes on.",
      "author": "Robert Frost",
      "description": "A reflection by renowned poet Robert Frost on the continuous flow of life despite challenges and changes."
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
      "author": "Franklin D. Roosevelt",
      "description": "Former U.S. President Franklin D. Roosevelt encourages us to overcome self-doubt to unlock our potential."
    },
    {
      "quote": "Education is the most powerful weapon which you can use to change the world.",
      "author": "Nelson Mandela",
      "description": "Nelson Mandela, an anti-apartheid revolutionary and former President of South Africa, underscores the transformative power of education."
    },
    {
      "quote": "Life is really simple, but we insist on making it complicated.",
      "author": "Confucius",
      "description": "Ancient philosopher Confucius reminds us to embrace simplicity in our lives."
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill",
      "description": "Winston Churchill, a prominent British statesman, emphasizes the importance of persistence and courage in the face of challenges."
    },
    {
      "quote": "The only thing we have to fear is fear itself.",
      "author": "Franklin D. Roosevelt",
      "description": "Another quote from Roosevelt, this time addressing the paralyzing nature of fear."
    },
    {
      "quote": "Happiness is not something ready-made. It comes from your own actions.",
      "author": "Dalai Lama",
      "description": "The Dalai Lama speaks about the active role we play in cultivating our own happiness."
    },
    {
      "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "author": "Ralph Waldo Emerson",
      "description": "Philosopher Ralph Waldo Emerson celebrates the authenticity of individuality."
    },
    {
      "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
      "author": "Chinese Proverb",
      "description": "This proverb encourages taking action and making positive changes without delay."
    }
  ];


  document.getElementById("generateBtn").addEventListener("click",function(){


    let des=document.getElementById("des");
    let author=document.getElementById("author");



let random=Math.floor(Math.random()*quotes.length);

console.log(random)
console.log(quotes[random].author)

let gAuthor=quotes[random].author;
let gDescription=quotes[random].description;
author.innerText =gAuthor;
des.innerText =gDescription;

  })
  