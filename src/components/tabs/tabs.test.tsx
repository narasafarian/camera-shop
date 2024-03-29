import { render, screen } from '@testing-library/react';
import Tabs from './tabs';
import { Product } from '../../types/product';
import { BrowserRouter } from 'react-router-dom';

const product = {
  'id': 1,
  'name': 'Ретрокамера Dus Auge lV',
  'vendorCode': 'DA4IU67AD5',
  'type': 'Коллекционная',
  'category': 'Видеокамера',
  'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
  'previewImg': 'img/content/das-auge.jpg',
  'level': 'Любительский',
  'price': 73450,
  'previewImg2x': 'img/content/das-auge@2x.jpg',
  'previewImgWebp': 'img/content/das-auge.webp',
  'previewImgWebp2x': 'img/content/das-auge@2x.webp',
  'reviewCount': 149
} as Product;

test('Tabs should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <Tabs product={product} />
    </BrowserRouter>
  );
  expect(screen.getByText('Артикул:')).toBeInTheDocument();
  expect(screen.getByText('Категория:')).toBeInTheDocument();
  expect(screen.getByText('Тип камеры:')).toBeInTheDocument();
  expect(screen.getByText('Уровень:')).toBeInTheDocument();
  expect(screen.getByText(product.description)).toBeInTheDocument();
});
