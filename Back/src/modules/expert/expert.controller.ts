import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('expert')
@Controller('expert')
export class ExpertController {}
