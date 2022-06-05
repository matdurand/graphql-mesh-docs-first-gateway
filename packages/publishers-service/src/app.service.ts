import { Injectable } from '@nestjs/common';
import { Publisher } from './entities/Publisher';


const publishers: Publisher[] = [
  {
    id: '11',
    name: 'GenTek Publishing',
  },
  {
    id: '22',
    name: 'Abc Learning',
  },
];

@Injectable()
export class AppService {
  listPublishers(): Publisher[] {
    return publishers;
  }

  findOnePublisher(id: string): Publisher | null {
    return publishers.find((b) => b.id === id);
  }
}
