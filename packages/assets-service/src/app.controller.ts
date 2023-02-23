import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Asset } from './entities/Asset';
import { Category } from './entities/Category';

@ApiTags('assets')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ operationId: 'assets' })
  @Get('/assets')
  @ApiResponse({
    status: 200,
    type: [Asset],
  })
  listAssets() {
    console.log('Controller: listAssetCategories');
    return this.appService.listAssets();
  }

  @ApiOperation({ operationId: 'categories' })
  @Get('/categories')
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  listAssetCategories() {
    console.log('Controller: listAssetCategories');
    return this.appService.listAssetCategories();
  }

  @ApiOperation({ operationId: 'asset' })
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
    type: String,
  })
  findOneAsset(@Param() params) {
    console.log('Controller: findOneAsset', params);
    return this.appService.findOneAsset(params.id);
  }

  @ApiOperation({ operationId: 'category' })
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
    type: String,
  })
  findOneCategory(@Param() params) {
    console.log('Controller: findOneCategory', params);
    //throw new Error('Category boom');
    return this.appService.findOneCategory(params.id);
  }
}
