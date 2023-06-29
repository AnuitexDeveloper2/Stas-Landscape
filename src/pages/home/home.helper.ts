import { ImageSide, TextAndImageItem } from "../../models/TextAndImage";
import landscape from "../../assets/images/landscape.jpg";
import hardware from "../../assets/images/hardware.jpg";
import tree from "../../assets/images/tree.jpg";
import roll from "../../assets/images/roll.jpg";
import fellows from "../../assets/images/fellows.jpg";
import grass from "../../assets/images/grass.jpg";
import chair from "../../assets/images/chair.jpg";

export const getTextAndImageItems = (): Array<TextAndImageItem> => {
  return [
    {
      img: landscape,
      alt: "landscape",
      ImageSide: ImageSide.LEFT,
      title: "Ландшафтное проектирование",
      text: "Мы не только проектируем, но и заботимся о развитии     вашего сада. Проектируя сад, мы учитываем масштабы и развитие растений на протяжении многих лет.",
    },
    {
      img: hardware,
      alt: "hardware",
      ImageSide: ImageSide.RIGHT,
      title: "Виртуальное погружение  в будущий проект",
      text: "Мы предоставляем уникальную услугу демонстрации ландшафтного дизайна. Виртуальная реальность дает возможность максимально реалистично погрузится в атмосферу будущего сада.",
    },
    {
      img: tree,
      alt: "tree",
      ImageSide: ImageSide.LEFT,
      title: "Посадка растений на территории любой площади и сложности",
      text: "По-настоящему качественные ландшафтные работы начинаются с выбора подходящего посадочного материала. Также для приживаемости, развития и роста растений важна правильная, профессиональная посадка, которую могут выполнить специалисты нашей компании.",
    },
    {
      img: roll,
      alt: "roll",
      ImageSide: ImageSide.RIGHT,
      title: "Укладка рулонного газона",
      text: "Рулонный газон является одним из главных элементов сада, он необходим, чтобы Ваш сад стал полноценным. Наша команда всегда готова помочь Вам с выбором и укладкой рулонного газона в краткие сроки.",
    },
    {
      img: fellows,
      alt: "fellows",
      ImageSide: ImageSide.LEFT,
      title: "Обслуживание и уход за участками",
      text: "Безупречность участка заключается в его профессиональном и регулярном уходе. Мы позаботимся о красоте и здоровье Вашего сада.",
    },
    {
      img: grass,
      alt: "grass",
      ImageSide: ImageSide.RIGHT,
      title: "Укладка искуственного газона",
      text: "Рулонный газон является одним из главных элементов сада, он необходим, чтобы Ваш сад стал полноценным. Наша команда всегда готова помочь Вам с выбором и укладкой рулонного газона в краткие сроки.",
    },
    {
      img: chair,
      alt: "chair",
      ImageSide: ImageSide.LEFT,
      title: "3D Lumion Landscape",
      text: "Визуализация ландшафтного дизайна в Lumion даст Вам возможность почувствовать реальность будущего сада. Благодаря невероятной реалистичности картинки Вы детально ознакомитесь с нюансами и различными элементами сада.",
    },
  ];
};
