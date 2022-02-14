import { Controller, Get, Redirect, HttpStatus, Query } from '@nestjs/common';
import { GoService } from './go.service';
import { CoordsPlayerDto } from './dto';

@Controller('go')
export class GoController {
  constructor(private readonly goService: GoService) {}

  @Get()
  @Redirect('/main', HttpStatus.FOUND)
  index(@Query() coords: CoordsPlayerDto) {
    this.goService.move(coords);
  }
}
