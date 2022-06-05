import { Injectable } from '@nestjs/common';
import { User } from './entities/User';

const users: User[] = [
  {
    id: '1',
    name: 'Luke Skywalker',
    entitlementsIds: ['1', '2'],
  },
  {
    id: '2',
    name: 'Anakin Skywalker',
    entitlementsIds: ['1', '2', '3'],
  },
  {
    id: '3',
    name: 'Obi-wan Kenobi',
    entitlementsIds: ['3'],
  },
];

@Injectable()
export class AppService {
  listUsers(): User[] {
    return users;
  }

  findOneUser(id: string): User | null {
    return users.find((b) => b.id === id);
  }
}
