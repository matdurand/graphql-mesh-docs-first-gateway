import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Publisher } from './entities/Publisher';

@ApiTags('publishers')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ operationId: 'publishers' })
  @Get('/publishers')
  @ApiResponse({
    status: 200,
    type: [Publisher],
  })
  listPublishers() {
    console.log('Controller: listPublishers');
    return this.appService.listPublishers();
  }

  @ApiOperation({ operationId: 'publisher' })
  @ApiResponse({
    status: 200,
    type: Publisher,
  })
  @ApiResponse({
    status: 404,
  })
  @Get('/publishers/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  findOnePublisher(@Param() params) {
    console.log('Controller: findOnePublisher', params);
    return this.appService.findOnePublisher(params.id);
  }
}
