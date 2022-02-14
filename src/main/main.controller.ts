import { Controller, Get, Render } from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get()
  @Render('main/index')
  index() {
    return this.mainService.getMain();
  }
}
