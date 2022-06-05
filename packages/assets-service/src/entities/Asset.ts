import { ApiProperty } from '@nestjs/swagger';

export class Asset {
  @ApiProperty({ example: '1', type: String })
  id: string;

  @ApiProperty({ example: '1', type: String })
  publisherId: string;

  @ApiProperty({ example: '1', type: String })
  categoryId: string;

  @ApiProperty({ example: 'MyAsset', type: String })
  title: string;
}
