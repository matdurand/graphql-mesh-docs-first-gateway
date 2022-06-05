import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Asset } from './entities/Asset';
import { Category } from './entities/Category';

@ApiTags('assets')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/assets')
  @ApiResponse({
    status: 200,
    type: [Asset],
  })
  listAssets() {
    console.log('Controller: listAssetCategories')
    return this.appService.listAssets();
  }

  @Get('/categories')
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  listAssetCategories() {
    console.log('Controller: listAssetCategories')
    return this.appService.listAssetCategories();
  }

  @ApiResponse({
    status: 200,
    type: Asset,
  })
  @ApiResponse({
    status: 404,
  })
  @Get('/assets/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String
  })
  findOneAsset(@Param() params) {
    console.log('Controller: findOneAsset', params)
    return this.appService.findOneAsset(params.id);
  }

  @ApiResponse({
    status: 200,
    type: Category,
  })
  @ApiResponse({
    status: 404,
  })
  @Get('/categories/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String
  })
  findOneCategory(@Param() params) {
    console.log('Controller: findOneCategory', params)
    return this.appService.findOneCategory(params.id);
  }
}
