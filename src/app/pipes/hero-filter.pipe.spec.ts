import { Hero } from '../interfaces/hero.interface';
import { HeroFilterPipe } from './hero-filter.pipe';

describe('HeroFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('shoudl pipe return a list filter by hero title', () => {
    const pipe = new HeroFilterPipe();
    const heroes: Hero[] = [
      {
        title: 'Spiderman De Andrew Garfield Editado',
        body: 'Hombre araña',
        image:
          'https://i.pinimg.com/originals/d5/e5/74/d5e574aec285e57b79a3ee87de866cf7.jpg',
        category: 'main',
        createdAt: new Date(),
        updatedAt: new Date(),
        idAuthor: '15',
        _id: '123456',
      },
      {
        title: 'El hombre rata que me acabo de inventar',
        body: 'Hombre rata',
        image:
          'https://i.pinimg.com/originals/d5/e5/74/d5e574aec285e57b79a3ee87de866cf7.jpg',
        category: 'main',
        createdAt: new Date(),
        updatedAt: new Date(),
        idAuthor: '15',
        _id: '123456',
      },
    ];

    const result = pipe.transform(heroes, 'Spiderman De Andrew Garfield Editado');
    expect(result).toHaveSize(1);
  });
});
