import { Button } from "../templates/Button";
import { Card } from "../templates/Card";
import { CTA } from "../templates/CTA";
import { Hero } from "../templates/Hero"
import { Nav } from "../templates/Nav"
import { svgCreate } from "../templates/utils";

export const Home = () =>{

  const hero = new Hero('home-hero','Pear, kiwi & Mint','','They say that home is where the heart is. Perhaps that’s why a feeling of loss is so apparent when you are far from the ones you love.','./assets/Group 48.png', new Nav('./assets/Logo.png',`<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.711818 1.42364C0.318692 1.42364 0 1.10494 0 0.711818C0 0.318692 0.318692 0 0.711818 0H24.9136C25.3068 0 25.6255 0.318692 25.6255 0.711818C25.6255 1.10494 25.3068 1.42364 24.9136 1.42364H0.711818ZM0.711818 8.54182C0.318692 8.54182 0 8.22313 0 7.83C0 7.43687 0.318692 7.11818 0.711818 7.11818H24.9136C25.3068 7.11818 25.6255 7.43687 25.6255 7.83C25.6255 8.22313 25.3068 8.54182 24.9136 8.54182H0.711818ZM0.711818 15.66C0.318692 15.66 0 15.3413 0 14.9482C0 14.5551 0.318692 14.2364 0.711818 14.2364H24.9136C25.3068 14.2364 25.6255 14.5551 25.6255 14.9482C25.6255 15.3413 25.3068 15.66 24.9136 15.66H0.711818Z" fill="black"/>
  </svg>`,'Home')).build();
  const about = document.createElement('section');
  const aboutContainer = document.createElement('div');
  aboutContainer.className = 'about-container'
  const card1 = new Card('./assets/about-Group1.png','h4','Essential Oils','card','').build();
  const card2 = new Card('./assets/about-Group2.png','h4','Natural Cosmetics','card','').build();
  const card3 = new Card('./assets/about-Group3.png','h4','Diffusers','card','').build();
  const card4 = new Card('./assets/about-Group4.png','h4','Aromatherapy','card','').build();
  aboutContainer.append(card1,card2,card3,card4);
  about.append(aboutContainer);

  const explore = document.createElement('section');
  explore.className = 'explore'
  const exploreContainer = document.createElement('article');

  const title = document.createElement('h3');
  title.textContent = 'Improve your well-being with Aromatherapy'
  const text = document.createElement('p');
  text.textContent = `Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.`
  const exploreButton = new Button('a','', 'primary-button','Explore the collection','').build();
  exploreContainer.append(title,text,exploreButton);

  const exploreImage = document.createElement('img');
  exploreImage.src = './assets/exploreImg.png';
  exploreImage.className = 'explore-image';
  explore.append(exploreImage,exploreContainer);

  const bestSeller = document.createElement('section');
  bestSeller.className = 'bestseller'
  const bestSellerContainer = document.createElement('div');
  const bestSellerCTA = document.createElement('div');
  const bestSellerTitle = document.createElement('h2');
  const bestSellerButton = new Button('a','','primary-button','SHOP ALL','').build();
  bestSellerCTA.append(bestSellerTitle,bestSellerButton);

  const bestSellerCard1 = new Card('./assets/BestSellerRectangle1.png','h4','Aroma Diffuser','bestCard','Original product comes in three styles of color, usb charger').build();
  const bestSellerCard2 = new Card('./assets/BestSellerRectangle2.png','h4','Lux Aroma Diffuser','bestCard','Beautiful decorative object, perfumes the space with your favorite fragrance.').build();

  const bestSvg1 = document.createElement('div');
  const bestSvg2 = document.createElement('div');
  const svg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.81296 29.4389C10.8969 29.4389 11.7756 28.5602 11.7756 27.4763C11.7756 26.3924 10.8969 25.5137 9.81296 25.5137C8.72905 25.5137 7.85037 26.3924 7.85037 27.4763C7.85037 28.5602 8.72905 29.4389 9.81296 29.4389Z" fill="#1F2937"/>
  <path d="M23.5511 29.4389C24.635 29.4389 25.5137 28.5602 25.5137 27.4763C25.5137 26.3924 24.635 25.5137 23.5511 25.5137C22.4672 25.5137 21.5885 26.3924 21.5885 27.4763C21.5885 28.5602 22.4672 29.4389 23.5511 29.4389Z" fill="#1F2937"/>
  <path d="M27.4763 6.86908H5.71114L4.90648 2.74764C4.8606 2.52265 4.73728 2.32088 4.55798 2.17744C4.37868 2.03399 4.15475 1.95797 3.92518 1.9626H0V3.92519H3.12052L6.86907 22.7661C6.91495 22.9911 7.03827 23.1928 7.21757 23.3363C7.39687 23.4797 7.6208 23.5557 7.85037 23.5511H25.5137V21.5885H8.65503L7.85037 17.6633H25.5137C25.7405 17.6689 25.9623 17.5956 26.1412 17.4561C26.3201 17.3165 26.4451 17.1193 26.495 16.8979L28.4576 8.06626C28.4905 7.92066 28.4897 7.76948 28.4553 7.62422C28.421 7.47896 28.354 7.34345 28.2593 7.22801C28.1647 7.11257 28.045 7.02024 27.9093 6.95804C27.7736 6.89584 27.6255 6.86542 27.4763 6.86908ZM24.7287 15.7007H7.47748L6.10366 8.83167H26.2497L24.7287 15.7007Z" fill="#1F2937"/>
  </svg>`
  bestSvg1.innerHTML = svg;
  bestSvg2.innerHTML = svg;
  bestSellerCard1.append(bestSvg1);
  bestSellerCard2.append(bestSvg2);

  bestSellerContainer.append(bestSellerCard1,bestSellerCard2);

  const svgMoreDiv = document.createElement('div');
  const svgMore = `<svg width="35" height="9" viewBox="0 0 35 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.2688 1.17383C21.8307 2.73602 21.8307 5.26869 20.2688 6.83056C18.7066 8.39274 16.1739 8.39274 14.6117 6.83056C13.0498 5.26869 13.0498 2.73602 14.6117 1.17383C16.1739 -0.388348 18.7066 -0.388348 20.2688 1.17383Z" fill="#9CA3AF"/>
  <path d="M33.709 1.17144C35.2709 2.73366 35.2709 5.26642 33.709 6.82833C32.1468 8.39056 29.6141 8.39056 28.0519 6.82833C26.49 5.26642 26.49 2.73366 28.0519 1.17144C29.6141 -0.390478 32.1468 -0.390478 33.709 1.17144Z" fill="#9CA3AF"/>
  <path d="M6.82858 1.17729C8.39047 2.7392 8.39047 5.27195 6.82858 6.83418C5.26636 8.39609 2.73364 8.39609 1.17142 6.83418C-0.390475 5.27195 -0.390475 2.7392 1.17142 1.17729C2.73364 -0.384942 5.26636 -0.384942 6.82858 1.17729Z" fill="#5FD788"/>
  </svg>`
  svgMoreDiv.innerHTML = svgMore;
  const flower = document.createElement('img');
  flower.src = './assets/Flower.png'
  bestSeller.append(bestSellerCTA,bestSellerContainer,svgMoreDiv,flower);

  const soaps = document.createElement('section');
  soaps.className = 'soaps'
  const textContainer = document.createElement('div');
  textContainer.className = 'soaps-container'
  const titleSoaps = document.createElement('h2');
  titleSoaps.textContent = 'Our luxury soaps are 100% natural providing nourishing benefits for your skin.'
  const buttonSoaps = new Button('a','','secundary-button','SHOP ALL','').build();
  const imageSoaps = document.createElement('img');
  imageSoaps.src = './assets/soap.png'

  textContainer.append(titleSoaps,buttonSoaps);
  soaps.append(textContainer,imageSoaps);

  //  trends

  const trends = document.createElement('section');
  trends.className = 'trends';
  const trendsCTA = new CTA('h2','Trends','p','', new Button('a','','primary-button','SHOP ALL','trends__CTA')).build();
  const trendsCard1 = new Card('./assets/Trendsimg1.png','h4','Basket INNER BEAUTY','trends__card','Original product comes in three styles of color, usb charger',`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.81296 29.4389C10.8969 29.4389 11.7756 28.5602 11.7756 27.4763C11.7756 26.3924 10.8969 25.5137 9.81296 25.5137C8.72905 25.5137 7.85037 26.3924 7.85037 27.4763C7.85037 28.5602 8.72905 29.4389 9.81296 29.4389Z" fill="#1F2937"/>
  <path d="M23.5511 29.4389C24.635 29.4389 25.5137 28.5602 25.5137 27.4763C25.5137 26.3924 24.635 25.5137 23.5511 25.5137C22.4672 25.5137 21.5885 26.3924 21.5885 27.4763C21.5885 28.5602 22.4672 29.4389 23.5511 29.4389Z" fill="#1F2937"/>
  <path d="M27.4763 6.86908H5.71114L4.90648 2.74764C4.8606 2.52265 4.73728 2.32088 4.55798 2.17744C4.37868 2.03399 4.15475 1.95797 3.92518 1.9626H0V3.92519H3.12052L6.86907 22.7661C6.91495 22.9911 7.03827 23.1928 7.21757 23.3363C7.39687 23.4797 7.6208 23.5557 7.85037 23.5511H25.5137V21.5885H8.65503L7.85037 17.6633H25.5137C25.7405 17.6689 25.9623 17.5956 26.1412 17.4561C26.3201 17.3165 26.4451 17.1193 26.495 16.8979L28.4576 8.06626C28.4905 7.92066 28.4897 7.76948 28.4553 7.62422C28.421 7.47896 28.354 7.34345 28.2593 7.22801C28.1647 7.11257 28.045 7.02024 27.9093 6.95804C27.7736 6.89584 27.6255 6.86542 27.4763 6.86908ZM24.7287 15.7007H7.47748L6.10366 8.83167H26.2497L24.7287 15.7007Z" fill="#1F2937"/>
  </svg>
  `).build();
  const trendsCard2 = new Card('./assets/Trendsimg2.png','h4','Uplift Handcrafted Soap Bar','trends__card','Beautiful decorative object, perfumes the space with your favorite fragrance.',`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.81296 29.4389C10.8969 29.4389 11.7756 28.5602 11.7756 27.4763C11.7756 26.3924 10.8969 25.5137 9.81296 25.5137C8.72905 25.5137 7.85037 26.3924 7.85037 27.4763C7.85037 28.5602 8.72905 29.4389 9.81296 29.4389Z" fill="#1F2937"/>
  <path d="M23.5511 29.4389C24.635 29.4389 25.5137 28.5602 25.5137 27.4763C25.5137 26.3924 24.635 25.5137 23.5511 25.5137C22.4672 25.5137 21.5885 26.3924 21.5885 27.4763C21.5885 28.5602 22.4672 29.4389 23.5511 29.4389Z" fill="#1F2937"/>
  <path d="M27.4763 6.86908H5.71114L4.90648 2.74764C4.8606 2.52265 4.73728 2.32088 4.55798 2.17744C4.37868 2.03399 4.15475 1.95797 3.92518 1.9626H0V3.92519H3.12052L6.86907 22.7661C6.91495 22.9911 7.03827 23.1928 7.21757 23.3363C7.39687 23.4797 7.6208 23.5557 7.85037 23.5511H25.5137V21.5885H8.65503L7.85037 17.6633H25.5137C25.7405 17.6689 25.9623 17.5956 26.1412 17.4561C26.3201 17.3165 26.4451 17.1193 26.495 16.8979L28.4576 8.06626C28.4905 7.92066 28.4897 7.76948 28.4553 7.62422C28.421 7.47896 28.354 7.34345 28.2593 7.22801C28.1647 7.11257 28.045 7.02024 27.9093 6.95804C27.7736 6.89584 27.6255 6.86542 27.4763 6.86908ZM24.7287 15.7007H7.47748L6.10366 8.83167H26.2497L24.7287 15.7007Z" fill="#1F2937"/>
  </svg>
  `).build();
  const trendsIcon = svgCreate(`<svg width="35" height="9" viewBox="0 0 35 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.2688 1.17383C21.8307 2.73602 21.8307 5.26869 20.2688 6.83056C18.7066 8.39274 16.1739 8.39274 14.6117 6.83056C13.0498 5.26869 13.0498 2.73602 14.6117 1.17383C16.1739 -0.388348 18.7066 -0.388348 20.2688 1.17383Z" fill="#9CA3AF"/>
  <path d="M33.709 1.17144C35.2709 2.73366 35.2709 5.26642 33.709 6.82833C32.1468 8.39056 29.6141 8.39056 28.0519 6.82833C26.49 5.26642 26.49 2.73366 28.0519 1.17144C29.6141 -0.390478 32.1468 -0.390478 33.709 1.17144Z" fill="#9CA3AF"/>
  <path d="M6.82858 1.17729C8.39047 2.7392 8.39047 5.27195 6.82858 6.83418C5.26636 8.39609 2.73364 8.39609 1.17142 6.83418C-0.390475 5.27195 -0.390475 2.7392 1.17142 1.17729C2.73364 -0.384942 5.26636 -0.384942 6.82858 1.17729Z" fill="#5FD788"/>
  </svg>
  `)
  trends.append(trendsCTA,trendsCard1,trendsCard2,trendsIcon);
  const blog = document.createElement('section');
  blog.className = 'blog';
  const blogContainer = document.createElement('div');
  blog.append(blogContainer);

  const blogCard1 = new Card('./assets/blog.png','h4','How to create your own essential oil diffuser blends','blog__card','As you begin creating your own diffuser blends, it’s important to keep a few ...').build();
  const blogCard2 = new Card('./assets/blog.png','h4','How to create your own essential oil diffuser blends','blog__card','As you begin creating your own diffuser blends, it’s important to keep a few ...').build();
  const blogCard3 = new Card('./assets/blog.png','h4','How to create your own essential oil diffuser blends','blog__card','As you begin creating your own diffuser blends, it’s important to keep a few ...').build();
  blogContainer.append(blogCard1,blogCard2,blogCard3);



  return [hero,about,explore,bestSeller,soaps,trends,blog];


}
