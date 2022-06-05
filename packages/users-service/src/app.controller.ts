import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { User } from './entities/User';

@ApiTags('users')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/users')
  @ApiResponse({
    status: 200,
    type: [User],
  })
  listUsers() {
    console.log('Controller: listUsers')
    return this.appService.listUsers();
  }

  @ApiResponse({
    status: 200,
    type: User,
  })
  @ApiResponse({
    status: 404,
  })
  @Get('/users/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String
  })
  findOneUser(@Param() params) {
    console.log('Controller: findOneUser', params)
    return this.appService.findOneUser(params.id);
  }
}
