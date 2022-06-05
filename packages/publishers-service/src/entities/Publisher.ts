import { ApiProperty } from '@nestjs/swagger';

export class Publisher {
  @ApiProperty({ example: '1', type: String })
  id: string;

  @ApiProperty({ example: 'GenTek Publishing', type: String })
  name: string;
}
