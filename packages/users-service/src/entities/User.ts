import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: '1', type: String })
  id: string;

  @ApiProperty({ example: 'Obi-wan Kenobi', type: String })
  name: string;

  @ApiProperty({ example: '1', type: [String] })
  entitlementsIds: string[];
}
