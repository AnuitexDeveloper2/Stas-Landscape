import { ImageSide, TextAndImageItem } from "../../models/TextAndImage";
import landscape from "../../assets/images/project.jpg";
import tree from "../../assets/images/tree.jpg";
import roll from "../../assets/images/roll.jpg";
import fellows from "../../assets/images/fellows.jpg";
import grass from "../../assets/images/grass.jpg";

export const getTextAndImageItems = (): Array<TextAndImageItem> => {
  return [
    {
      img: landscape,
      alt: "landscape",
      ImageSide: ImageSide.LEFT,
      title: "Ландшафтне проектування",
      text: "Ми не тільки проектуємо, але й піклуємось про розвиток вашого саду. Проектуючи сад, ми враховуємо масштаби та розвиток рослин протягом багатьох років.",
    },
    {
      img: tree,
      alt: "tree",
      ImageSide: ImageSide.RIGHT,
      title: "Посадка рослин на території будь-якої площі та складності",
      text: "По-справжньому якісні ландшафтні роботи починаються з вибору відповідного посадкового матеріалу. Також для приживання, розвитку та росту рослин важлива правильна, професійна посадка, яку можуть виконати фахівці нашої компанії.",
    },
    {
      img: roll,
      alt: "roll",
      ImageSide: ImageSide.LEFT,
      title: "Укладання рулонного газону",
      text: "Рулонний газон є одним із головних елементів саду, він необхідний, щоб Ваш сад став повноцінним. Наша команда завжди готова допомогти Вам з вибором та укладанням рулонного газону в короткі терміни.",
    },
    {
      img: fellows,
      alt: "fellows",
      ImageSide: ImageSide.RIGHT,
      title: "Обслуговування та догляд за ділянками",
      text: "Бездоганність ділянки полягає в її професійному та регулярному догляді. Ми подбаємо про красу та здоров'я Вашого саду.",
    },
    {
      img: grass,
      alt: "grass",
      ImageSide: ImageSide.LEFT,
      title: "Укладання штучного газону",
      text: "Рулонний газон є одним із головних елементів саду, він необхідний, щоб Ваш сад став повноцінним. Наша команда завжди готова допомогти Вам з вибором та укладанням рулонного газону в короткі терміни.",
    },
  ];
};
