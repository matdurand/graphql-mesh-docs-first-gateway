import { Injectable } from '@nestjs/common';
import { Asset } from './entities/Asset';
import { Category } from './entities/Category';

const categories: Category[] = [
  {
    id: '1',
    name: '3D',
  },
  {
    id: '2',
    name: '2D',
  },
];

const assets: Asset[] = [
  {
    id: '1',
    title: 'Cartoon cars',
    publisherId: '11',
    categoryId: '1',
  },
  {
    id: '2',
    title: 'Cartoon houses',
    publisherId: '11',
    categoryId: '1',
  },
  {
    id: '3',
    title: '2D Medieval characters',
    publisherId: '22',
    categoryId: '2',
  },
];

@Injectable()
export class AppService {
  listAssets(): Asset[] {
    return assets;
  }

  findOneAsset(id: string): Asset | null {
    return assets.find((b) => b.id === id);
  }

  listAssetCategories(): Category[] {
    return categories;
  }

  findOneCategory(id: string): Category | null {
    return categories.find((c) => c.id === id);
  }
}
