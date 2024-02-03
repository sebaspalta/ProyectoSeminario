import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {
  slides = [
    {
      title: "¡Boletas en Colombia!",
      image:  "https://img.freepik.com/foto-gratis/dos-tickets-amarillos_1101-56.jpg?1&w=740&t=st=1705929790~exp=1705930390~hmac=5f6a9395ca3fabbf7d591574f83f3352730c450444a93620d50c9218e6ec22ea",
      description: "Boletas es la aplicación que necesitas para encontrar las mejores boletas para  <br> cualquier evento en Colombia. Con una amplia variedad de opciones, desde <br> conciertos y deportes hasta teatro y espectáculos, seguramente encontrarás <br> lo que buscas. Además, la aplicación es fácil de usar y te permite comprar <br> tus boletas con solo unos clics. <strong>Descarga Boletas hoy y comienza a disfrutar de los mejores eventos de Colombia.</strong></p></swiper-slide>",      
      class: "slide-1 "
    },
    {
      title: "Circo!",
      image: "https://partfy.s3.eu-south-2.amazonaws.com/frontend/files/ideas/591254fa84d6bimage.jpg",
      description: "¡Descubre la magia del circo en Barranquilla! Acróbatas, payasos y animales sorprendentes <br> te esperan. <b>¡Garantiza tu entrada para una experiencia única llena de diversión y asombro! </b><br></p></swiper-slide>",
      class: "slide 2"
    },
    {
      title: "¡Partido de colombia argentina!",
      image: "https://elcomercio.pe/resizer/7WL3C-tNhsq8Y4m92teLLSAqKiY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TMIIC5VJO5HV5BZNNER5MP2HDI.jpg",
      description: "¡Asegura tu lugar para el enfrentamiento épico entre Colombia <br> y Argentina en Barranquilla! La emoción del fútbol en su máxima expresión. <br>¡No te pierdas este choque de titanes! Compra tus entradas ahora y sé parte <br> de la pasión del fútbol en vivo. <b>¡Actúa rápido antes de que se agoten!",
      class: "slide-3"
    },
    {
      title: "¡Morat en el campin!",
      image: "https://static.wixstatic.com/media/642daa_dfc8dee3538b4ce6997a0ed1d2848149~mv2.jpeg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/642daa_dfc8dee3538b4ce6997a0ed1d2848149~mv2.jpeg",
      description: "¡Atrapa la magia musical de Morat en vivo! Adquiere tus entradas para un concierto inolvidable lleno de melodías envolventes. <b>¡No te lo pierdas, compra ya!",
      Class: "slide-4"
    }
  ]

  constructor(
    private storage: Storage
  ) {}

  ionViewDidEnter() {
    console.log("Ya entre y vi la intro");
    this.storage.set('mostreLaIntro', true);
    // Vamos a guardar en el storage que ya vio la intro
  }

}
