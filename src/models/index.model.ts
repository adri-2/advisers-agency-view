export interface Menu {
    name: string;
    href: string;
    children?: Menu[];
}

// Définition du type
interface CardData {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  readingTime: string;
  views: number;
  comments: number;
  likes: number;
}

// Props du composant
export interface CardInfoProps {
  data: CardData;
}